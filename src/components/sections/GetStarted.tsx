
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Creating your free website is simple</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Get an easy-to-build site with automatic RSVP tracking to save yourself time.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-white rounded-xl shadow-sm p-4 hover-scale">
              <img
                src="/lovable-uploads/a7321801-53a4-4199-8cc8-2774d33e88fa.png"
                alt="Website template"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-lg">Picture This - Green</h3>
              <Link 
                to="/templates/picture-this"
                className="text-planero-pink hover:text-planero-pink-hover text-sm"
              >
                See matching invitations
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-4 hover-scale">
              <img
                src="/lovable-uploads/5542d9cc-b700-412d-b1e3-2021f8e5f663.png"
                alt="Website template"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-lg">Vintage Nouveau - Green</h3>
              <Link 
                to="/templates/vintage-nouveau"
                className="text-planero-pink hover:text-planero-pink-hover text-sm"
              >
                See matching invitations
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-4 hover-scale">
              <img
                src="/lovable-uploads/5542d9cc-b700-412d-b1e3-2021f8e5f663.png"
                alt="Website template"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-lg">Delicate Wildflower - White</h3>
              <Link 
                to="/templates/delicate-wildflower"
                className="text-planero-pink hover:text-planero-pink-hover text-sm"
              >
                See matching invitations
              </Link>
            </div>
          </div>
          
          <Link to="/templates" className="btn-primary inline-block mb-16">
            See all designs
          </Link>
          
          <div className="bg-planero-cream rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
              Create your free account today and begin planning the event of your dreams with our powerful tools and network of top vendors.
            </p>
            <Link to="/signup" className="btn-primary inline-block">
              Sign up for free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
