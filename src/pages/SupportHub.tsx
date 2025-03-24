
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const SupportHub = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Support Hub</h1>
            <p className="text-lg text-gray-600">
              Access the resources you need for successful event planning in Mumbai
            </p>
          </div>
          
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">Support Hub content coming soon!</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SupportHub;
