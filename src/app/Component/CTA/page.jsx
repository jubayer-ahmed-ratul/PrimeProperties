export default function CTA() {
  return (
    <section className="py-16 bg-primary dark:bg-gray-900 text-white transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Perfect Property?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Join thousands of satisfied clients who found their dream homes with us
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/items" className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
            Browse Properties
          </a>
          <a href="/login" className="bg-secondary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}
