
import { Link } from 'react-router-dom';

interface CategoryButtonProps {
  name: string;
  icon?: React.ReactNode;
  link: string;
}

const CategoryButton = ({ name, icon, link }: CategoryButtonProps) => {
  return (
    <Link
      to={link}
      className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
    >
      {icon && (
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-planero-light-gray mb-3 group-hover:bg-planero-pink/10 transition-colors">
          {icon}
        </div>
      )}
      <span className="font-medium text-center group-hover:text-planero-pink transition-colors">
        {name}
      </span>
    </Link>
  );
};

export default CategoryButton;
