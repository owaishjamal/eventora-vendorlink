
import PlanningCard from '../ui/PlanningCard';
import { Link } from 'react-router-dom';

const PlanningFeatures = () => {
  const planningFeatures = [
    {
      eyebrow: 'FIND YOUR DESIGN',
      title: 'Your invitations',
      description: 'Choose from hundreds of customizable designs in your style and budget. Make RSVPs easier with QR codes.',
      image: 'https://images.unsplash.com/photo-1553103099-d593ba17a35a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      link: '/planning-tools/invitations',
      linkText: 'Get started',
    },
    {
      eyebrow: 'GET ORGANIZED EARLY',
      title: 'Your budget and vision',
      description: 'Make the next steps easier! We\'ll help you gather inspiration, find your style, set up a budget—even create a guest list.',
      image: 'https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      link: '/planning-tools/budget-calculator',
      linkText: 'Get started',
    },
    {
      eyebrow: 'ALL IN ONE PLACE',
      title: 'Your registry',
      description: 'Give guests one place to RSVP and shop your registry with cash funds, experiences and gifts from top stores.',
      image: 'https://images.unsplash.com/photo-1588774210246-a1651bc5acf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      link: '/planning-tools/registry',
      linkText: 'Get started',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">We'll walk you through every part of planning</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {planningFeatures.map((feature, index) => (
            <PlanningCard
              key={index}
              eyebrow={feature.eyebrow}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              link={feature.link}
              linkText={feature.linkText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanningFeatures;
