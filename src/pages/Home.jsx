
export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-16 text-gray-800">
      <section>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          GenAI Evaluation Framework
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Helping institutions choose responsible, equitable, and effective AI tools.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Generative AI (GenAI) tools like ChatGPT, Claude, and Gemini are transforming how people learn, teach, and work across educational institutions. As these tools become more integrated into academic workflows, universities face the critical challenge of adopting them responsibly and effectively.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">
          Why Evaluation Frameworks Matter
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Clarity & Consistency:</strong> Tools evaluated on equal footing</li>
          <li><strong>Risk Mitigation:</strong> Anticipate and avoid institutional harm</li>
          <li><strong>Transparency:</strong> Builds trust through documentation</li>
        </ul>
      </section>
    </div>
  );
}
