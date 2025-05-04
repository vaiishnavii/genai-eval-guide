import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
export default function Whyframeworks() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}/content/why-frameworks.md`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);
  return (
    <div className="prose max-w-4xl mx-auto py-10 px-6">
    <ReactMarkdown>{content}</ReactMarkdown>
  </div>
  );
}
