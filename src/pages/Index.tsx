
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import VendorCategories from '../components/sections/VendorCategories';
import FeaturedVenues from '../components/sections/FeaturedVenues';
import PlanningFeatures from '../components/sections/PlanningFeatures';
import GetStarted from '../components/sections/GetStarted';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <VendorCategories />
        <FeaturedVenues />
        <PlanningFeatures />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
