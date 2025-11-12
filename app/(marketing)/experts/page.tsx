import PageContainer from '@/components/layout/page-container'
import { AnimatedBackground } from '@/components/marketing/AnimatedBackground'

export default function ExpertsPage() {
  const seoData = {
    description: 'Connect with expert developers and consultants on the Aurora platform.',
    keywords: ['experts', 'consultants', 'developers', 'services', 'professional help']
  }

  return (
    <PageContainer
      title="Expert Services - Aurora"
      seo={seoData}
    >
      {/* Hero */}
      <section className="relative bg-body">
        <AnimatedBackground />
        <div className="container px-4 mx-auto py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading tracking-tight text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-gray-900">
              Expert Services
            </h1>
            <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
              Connect with experienced developers who can help you build your project faster.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="bg-gray-50 py-24">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white/40 backdrop-blur-md rounded-3xl border border-white/30 p-12 md:p-16 shadow-lg">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Coming Soon
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We're building a marketplace where you can connect with expert developers for custom development, consulting, and support.
              </p>
              <p className="text-gray-600">
                For immediate assistance, please contact us at{' '}
                <a href="mailto:support@auroradev.com" className="text-purple-600 hover:underline">
                  support@auroradev.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  )
}
