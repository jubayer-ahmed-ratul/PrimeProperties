export default function Banner() {
  return (
    <section
      className="text-white py-20 md:py-32 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(37, 99, 235, 0.7), rgba(30, 64, 175, 0.7)), url(https://i.ibb.co/0VdqwhtN/banner.jpg)",
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Find Your Dream <span className="text-secondary">Home</span> Today
        </h1>

        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
          Discover the perfect property that matches your lifestyle. From modern apartments to luxurious villas, we have options for every need and budget.
        </p>

        <a
          href="/items"
          className="btn-secondary inline-flex items-center gap-2 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition-transform duration-300 hover:scale-105"
        >
          Explore Properties <i className="fas fa-arrow-right"></i>
        </a>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
  <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm">
    <div className="text-4xl font-bold text-secondary">500+</div>
    <div className="text-lg mt-2 text-black font-medium">
      Properties Listed
    </div>
  </div>

  <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm">
    <div className="text-4xl font-bold text-secondary">98%</div>
    <div className="text-lg mt-2 text-black font-medium">
      Client Satisfaction
    </div>
  </div>

  <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm">
    <div className="text-4xl font-bold text-secondary">25+</div>
    <div className="text-lg mt-2 text-black font-medium">
      Years Experience
    </div>
  </div>
</div>

      </div>
    </section>
  );
}
