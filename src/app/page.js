'use client'

import Navbar from "./Component/Navbar/page"
import Banner from "./Component/Home/page"
import InfoSection from "./Component/InfoSection/page"
import Services from "./Component/Services/page"
import Stats from "./Component/Stats/page"
import ItemList from "./Component/ItemList/page"
import Testimonials from "./Component/Testimonials/page"
import CTA from "./Component/CTA/page"
import Footer from "./Component/Footer/page";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      <Banner />
      <InfoSection />
      <Services />
      <Stats />
      <ItemList />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
