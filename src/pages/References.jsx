import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
export default function References() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}/content/references.md`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="prose max-w-4xl mx-auto py-10 px-6">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
