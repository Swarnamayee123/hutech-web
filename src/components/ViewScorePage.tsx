/** @format */

import { useState, useEffect } from "react";

export function ViewScorePage() {
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState<{ value: number } | null>(null);

  useEffect(() => {
    fetch("/api/score") // ensure this endpoint is correct
      .then((res) => res.json())
      .then((data) => {
        setScore(data);
        setLoading(false);
      })
      .catch(() => {
        // handle error
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>Please wait</h1>;
  if (!score) return <h1>No Score Found</h1>;

  return (
    <div>
      {/* Render your score */}
      Your score: {score.value}
    </div>
  );
}

export default ViewScorePage;
