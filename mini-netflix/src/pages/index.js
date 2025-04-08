import { useState, useEffect } from 'react';
import TextImage from '@/components/TextImage';
import movies from "../data/movies.json"
import classNames from 'classnames';

const Home = () => {
  const [isGridView, setIsGridView] = useState(true);

  // Toggle between grid view and list view
  const toggleView = () => setIsGridView((prevState) => !prevState);
  return (
    <main className="container">
      <div className="homepage">
      <button
        onClick={toggleView}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        {isGridView ? 'Switch to List View' : 'Switch to Grid View'}
      </button>
        <div className={classNames(
          isGridView ? "grid-3x3" : ""
        )}>
          {movies.map((movie) => (
            <div className='movie-block'>
            <TextImage 
              id={movie.id}
              orientation={isGridView}
            />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home