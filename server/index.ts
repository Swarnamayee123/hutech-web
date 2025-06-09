/** @format */

import express from "express";
import fs from "fs";
import path from "path";

const isProd = process.env.NODE_ENV === "production";
const app = express();

async function createServer() {
  let vite: any;

  if (!isProd) {
    vite = await require("vite").createServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
  } else {
    app.use(require("compression")());
    app.use(express.static(path.resolve(__dirname, "../dist/client")));
  }

  app.use("*", async (req, res) => {
    try {
      const url = req.originalUrl;

      let template, render;

      if (!isProd) {
        template = fs.readFileSync(
          path.resolve(__dirname, "../index.html"),
          "utf-8"
        );
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule("/server/entry-server.tsx")).render;
      } else {
        // template = fs.readFileSync(path.resolve(__dirname, '../dist/client/index.html'), 'utf-8');
        // render = require('./dist/server/entry-server.js').render;
      }

      const { appHtml } = render();
      const html = template.replace(`<!--app-html-->`, appHtml);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e: any) {
      vite && vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  return { app };
}

createServer().then(({ app }) =>
  app.listen(5173, () => {
    console.log(`✅ Vite SSR app running at http://localhost:5173`);
  })
);
