import Footer from "../components/Footer";

const TermsOfService = () => {
  return (
    <>
    <div className="relative z-10 min-h-screen px-6 py-15 text-white">
      <div className="mb-20 max-w-5xl mx-auto">
        
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
          Terms of Service
        </h1>
        <p className="text-gray-400 mb-10">
          Last updated: february 1, 2026
        </p>

        {/* Section Wrapper */}
        <div className="space-y-10">

          {/* 1 */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <h2 className="text-xl font-semibold mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using <strong>ConfessIt</strong> (“the Service”),
              you agree to be bound by these Terms of Service. If you do not agree
              with any part of these terms, you must not use the Service.
            </p>
          </section>

          {/* 2 */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <h2 className="text-xl font-semibold mb-3">
              2. Description of Service
            </h2>
            <p className="text-gray-300 leading-relaxed">
              ConfessIt is an anonymous expression platform that allows users to
              share confessions, thoughts, and experiences without revealing
              their identity. The Service is provided free of charge.
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">
              We reserve the right to modify, suspend, or discontinue any part
              of the Service at any time without notice.
            </p>
          </section>

          {/* 3 */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <h2 className="text-xl font-semibold mb-3">
              3. User Conduct
            </h2>
            <p className="text-gray-300 mb-3">
              You agree not to use the Service to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Post illegal, harmful, threatening, or abusive content</li>
              <li>Harass, defame, or impersonate others</li>
              <li>Violate intellectual property or privacy rights</li>
              <li>Post spam, advertisements, or promotional material</li>
              <li>Disrupt or interfere with the Service or its users</li>
              <li>Use automated systems to access the Service</li>
              <li>Promote violence, hatred, or self-harm</li>
            </ul>
          </section>

          {/* 4 */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <h2 className="text-xl font-semibold mb-3">
              4. Content Responsibility
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Users are solely responsible for the content they submit.
              ConfessIt does not endorse or guarantee the accuracy of any
              user-generated content.
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">
              We reserve the right to remove content that violates these Terms
              or applicable laws.
            </p>
          </section>

          {/* 5 */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <h2 className="text-xl font-semibold mb-3">
              5. Privacy & Anonymity
            </h2>
            <p className="text-gray-300 leading-relaxed">
              ConfessIt is built with anonymity in mind.
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">
              Limited technical information may be collected for moderation,
              security, and legal compliance purposes.
            </p>
          </section>

          {/* 6 */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <h2 className="text-xl font-semibold mb-3">
              6. Intellectual Property
            </h2>
            <p className="text-gray-300 leading-relaxed">
              You retain ownership of the content you submit. By posting on
              ConfessIt, you grant us a non-exclusive, worldwide license to
              display and distribute your content within the Service.
            </p>
          </section>

          

          {/* 8 */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <h2 className="text-xl font-semibold mb-3">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-300 leading-relaxed uppercase">
              ConfessIt shall not be liable for any indirect, incidental, or
              consequential damages arising from use of the Service.
            </p>
          </section>

          {/* 9 */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <h2 className="text-xl font-semibold mb-3">
              8. Changes to These Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may update these Terms from time to time. Continued use of
              the Service constitutes acceptance of the revised terms.
            </p>
          </section>

          

        </div>
      </div>
    <Footer/>
    </div>
    </>
  );
};

export default TermsOfService;
