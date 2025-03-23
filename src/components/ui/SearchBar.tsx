
import { Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type SearchOptions = 'vendors' | 'venues' | 'inspiration';

const SearchBar = () => {
  const [searchType, setSearchType] = useState<SearchOptions>('vendors');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/${searchType}?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-2 md:p-0">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row">
        <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-200 px-4 py-3">
          <div className="mr-4">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder={`Search for ${searchType}...`}
            className="flex-1 outline-none text-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex items-center px-4 py-3">
          <select
            className="appearance-none bg-transparent text-gray-700 py-1 pl-2 pr-8 rounded focus:outline-none"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value as SearchOptions)}
          >
            <option value="vendors">Vendors</option>
            <option value="venues">Venues</option>
            <option value="inspiration">Inspiration</option>
          </select>
        </div>
        
        <button 
          type="submit"
          className="bg-planero-pink hover:bg-planero-pink-hover text-white font-medium px-6 py-3 rounded-r-xl transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
