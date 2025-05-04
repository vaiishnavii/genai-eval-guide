import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
export default function Resources() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/content/resources.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);
  return (
    // <div className="max-w-5xl mx-auto px-6 py-16 space-y-12 text-gray-800">
    //   <h1 className="text-3xl font-bold text-gray-900 border-b pb-3">Resources & References</h1>

    //   <section>
    //     <h2 className="text-xl font-semibold text-gray-900 mb-2">Example Frameworks</h2>
    //     <ul className="list-disc pl-6 space-y-2 text-blue-700">
    //       <li>
    //         <a className="hover:underline transition-colors duration-200" href="https://crfm.stanford.edu/helm/latest/" target="_blank" rel="noreferrer">
    //           HELM – Stanford’s Holistic Evaluation of Language Models
    //         </a>
    //       </li>
    //       <li>
    //         <a className="hover:underline transition-colors duration-200" href="https://openai.com/research/gpt-4-system-card" target="_blank" rel="noreferrer">
    //           GPT-4 System Card – OpenAI
    //         </a>
    //       </li>
    //     </ul>
    //   </section>

    //   <section>
    //     <h2 className="text-xl font-semibold text-gray-900 mb-2">References</h2>
    //     <ul className="list-disc pl-6 space-y-2 text-gray-700">
    //       <li>IBM Research. (2023). What is Red Teaming for Generative AI?</li>
    //       <li>OpenAI. GPT-4 System Card. 2023.</li>
    //       <li>Google Developers. Fairness: Evaluating for Bias.</li>
    //     </ul>
    //   </section>
    // </div>
    <div className="prose max-w-4xl mx-auto py-10 px-6">
    <ReactMarkdown>{content}</ReactMarkdown>
  </div>
  );
}
