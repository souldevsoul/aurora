import PageContainer from '@/components/layout/page-container'

export default function AcceptableUsePage() {
  const seoData = {
    description: 'Acceptable Use Policy for Aurora - Guidelines for appropriate use of our platform.',
    keywords: ['acceptable use', 'policy', 'guidelines', 'terms', 'rules']
  }

  return (
    <PageContainer
      title="Acceptable Use Policy - Aurora"
      seo={seoData}
    >
      <section className="relative bg-body py-20">
        <div className="container px-4 mx-auto max-w-4xl">
          <h1 className="font-heading tracking-tight text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            Acceptable Use Policy
          </h1>
          <p className="text-gray-600 mb-12">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">1. Purpose</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                This Acceptable Use Policy outlines the guidelines for using the Aurora platform. By using our services, you agree to comply with this policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">2. Prohibited Activities</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You may not use Aurora for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Illegal activities or content that violates any laws</li>
                <li>Distributing malware, viruses, or harmful code</li>
                <li>Harassment, abuse, or threatening behavior</li>
                <li>Spam or unsolicited communications</li>
                <li>Infringement of intellectual property rights</li>
                <li>Unauthorized access to systems or data</li>
                <li>Activities that harm or disrupt our services</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">3. Content Guidelines</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All content generated or hosted using Aurora must:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Comply with applicable laws and regulations</li>
                <li>Respect intellectual property rights</li>
                <li>Not contain hate speech or discriminatory content</li>
                <li>Not promote violence or illegal activities</li>
                <li>Be appropriate for a professional environment</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">4. Security</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Users must:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Maintain the security of their account credentials</li>
                <li>Report security vulnerabilities responsibly</li>
                <li>Not attempt to bypass security measures</li>
                <li>Not scan, test, or probe our systems without authorization</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">5. Resource Usage</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To ensure fair access for all users:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Use resources reasonably and in accordance with your plan</li>
                <li>Do not attempt to monopolize shared resources</li>
                <li>Contact us if you need higher limits or dedicated resources</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">6. Enforcement</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Violations of this policy may result in:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Warning and request to cease prohibited activities</li>
                <li>Temporary suspension of service</li>
                <li>Permanent termination of account</li>
                <li>Legal action if warranted</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">7. Reporting Violations</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you become aware of any violation of this policy, please report it to{' '}
                <a href="mailto:support@auroradev.com" className="text-purple-600 hover:underline">
                  support@auroradev.com
                </a>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may update this Acceptable Use Policy from time to time. We will notify you of any material changes by email or through our platform.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">9. Contact</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions about this policy, please contact us at{' '}
                <a href="mailto:support@auroradev.com" className="text-purple-600 hover:underline">
                  support@auroradev.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </PageContainer>
  )
}
