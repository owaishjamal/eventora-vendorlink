
import PlanningCard from '../ui/PlanningCard';
import { Link } from 'react-router-dom';

const PlanningFeatures = () => {
  const planningFeatures = [
    {
      eyebrow: 'FIND YOUR DESIGN',
      title: 'Your invitations',
      description: 'Choose from hundreds of customizable designs in your style and budget. Make RSVPs easier with QR codes.',
      image: '/lovable-uploads/a7321801-53a4-4199-8cc8-2774d33e88fa.png',
      link: '/planning/invitations',
      linkText: 'Get started',
    },
    {
      eyebrow: 'GET ORGANIZED EARLY',
      title: 'Your budget and vision',
      description: 'Make the next steps easier! We\'ll help you gather inspiration, find your style, set up a budget—even create a guest list.',
      image: '/lovable-uploads/5542d9cc-b700-412d-b1e3-2021f8e5f663.png',
      link: '/planning/budget',
      linkText: 'Get started',
    },
    {
      eyebrow: 'ALL IN ONE PLACE',
      title: 'Your registry',
      description: 'Give guests one place to RSVP and shop your registry with cash funds, experiences and gifts from top stores.',
      image: '/lovable-uploads/5542d9cc-b700-412d-b1e3-2021f8e5f663.png',
      link: '/planning/registry',
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
