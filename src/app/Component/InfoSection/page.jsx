export default function InfoSection() {
  const features = [
    {
      icon: 'fa-search',
      bgColor: 'bg-blue-100 dark:bg-blue-900',
      textColor: 'text-primary',
      title: 'Easy Search',
      description: 'Find properties quickly with our advanced search filters and location-based suggestions.'
    },
    {
      icon: 'fa-handshake',
      bgColor: 'bg-orange-100 dark:bg-orange-900',
      textColor: 'text-secondary',
      title: 'Trusted Agents',
      description: 'Our certified agents provide expert guidance throughout your property buying journey.'
    },
    {
      icon: 'fa-shield-alt',
      bgColor: 'bg-green-100 dark:bg-green-900',
      textColor: 'text-green-600 dark:text-green-400',
      title: 'Secure Process',
      description: 'We ensure a transparent and secure transaction process with legal verification support.'
    }
  ]

  return (
    <section className="py-16 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We provide exceptional real estate services with a focus on customer satisfaction and quality properties.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300">
              <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.bgColor} ${feature.textColor} rounded-full mb-4`}>
                <i className={`fas ${feature.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
