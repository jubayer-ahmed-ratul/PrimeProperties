export default function Services() {
  const services = [
    {
      icon: 'fa-home',
      title: 'Property Sales',
      description: 'Buy or sell residential and commercial properties with our expert assistance.'
    },
    {
      icon: 'fa-key',
      title: 'Property Rentals',
      description: 'Find the perfect rental property or list your property for rent.'
    },
    {
      icon: 'fa-chart-line',
      title: 'Investment Consulting',
      description: 'Get professional advice on real estate investments and market trends.'
    }
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-black p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-transparent dark:border-gray-800">
              <div className="text-primary mb-4">
                <i className={`fas ${service.icon} text-4xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
