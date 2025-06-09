import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';

export function render() {
  const appHtml = renderToString(<App />);
  return { appHtml };
}
