export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      text: 'PrimeProperties helped me find my dream home. The process was smooth and the team was incredibly professional.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Investor',
      text: 'Excellent service and great investment opportunities. Highly recommend for anyone looking to invest in real estate.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'First-time Buyer',
      text: 'As a first-time buyer, I was nervous, but the team made everything easy to understand and stress-free.',
      rating: 5
    }
  ]

  return (
    <section className="py-16 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real stories from satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg transition-colors duration-300 border border-transparent dark:border-gray-800">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400"></i>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{testimonial.text}"</p>
              <div className="font-bold text-gray-800 dark:text-white">{testimonial.name}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
