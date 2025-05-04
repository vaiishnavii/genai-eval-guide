import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
export default function Recommendations() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/content/recommendations.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="prose max-w-4xl mx-auto py-10 px-6">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
