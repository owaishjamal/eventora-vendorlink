
import { Link } from 'react-router-dom';

interface PlanningCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  linkText: string;
  eyebrow?: string;
}

const PlanningCard = ({ 
  title, 
  description, 
  image, 
  link, 
  linkText,
  eyebrow 
}: PlanningCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover-scale">
      <div className="p-6">
        {eyebrow && (
          <span className="block text-xs font-semibold uppercase tracking-wider text-planero-pink mb-2">
            {eyebrow}
          </span>
        )}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-4">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-40 object-cover rounded-lg"
          />
        </div>
        
        <Link 
          to={link}
          className="inline-block text-planero-pink hover:text-planero-pink-hover font-medium"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default PlanningCard;
