export default function Stats() {
  const stats = [
    {
      icon: 'fa-building',
      number: '500+',
      label: 'Properties Listed',
      color: 'text-blue-600'
    },
    {
      icon: 'fa-users',
      number: '1000+',
      label: 'Happy Clients',
      color: 'text-green-600'
    },
    {
      icon: 'fa-award',
      number: '25+',
      label: 'Years Experience',
      color: 'text-orange-600'
    },
    {
      icon: 'fa-handshake',
      number: '98%',
      label: 'Client Satisfaction',
      color: 'text-purple-600'
    }
  ]

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Achievements</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Numbers that speak for our success and commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-8 bg-white dark:bg-black rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-transparent dark:border-gray-800"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4 ${stat.color}`}>
                <i className={`fas ${stat.icon} text-3xl`}></i>
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-gray-800 dark:text-white">{stat.number}</div>
              <div className="text-lg text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
