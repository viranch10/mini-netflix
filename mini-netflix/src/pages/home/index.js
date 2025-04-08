import { useState, useEffect } from 'react';
import generateRandomKey from '../../utils/utils'
import styles from './index.module.css'
import TextImage from '@/components/TextImage';
import movies from "../../data/movies.json"
import classNames from 'classnames';

const Home = () => {
  const [isGridView, setIsGridView] = useState(true);

  const toggleView = () => setIsGridView((prevState) => !prevState);
  function setEqualHeights() {
    const blocks = document.querySelectorAll('.movie-block');
    let maxHeight = 0;
  
    blocks.forEach(block => {
      block.style.height = 'auto';
    });
  
    blocks.forEach(block => {
      const blockHeight = block.offsetHeight;
      if (blockHeight > maxHeight) {
        maxHeight = blockHeight;
      }
    });
  
    blocks.forEach(block => {
      block.style.height = `${maxHeight}px`;
    });
  }
  
  useEffect(() => {
    window.addEventListener('load', setEqualHeights);
    window.addEventListener('resize', setEqualHeights);
  })

  
  if (!movies) return <div>Loading...</div>;
  
  return (
    <main className="container">
      <div className="homepage">
      <button
        onClick={toggleView}
        className={styles.toggleBox}
      >
      {isGridView ? 'Switch to List View' : 'Switch to Grid View'}
      </button>
        <div className={classNames(
          isGridView ? "grid-3x3" : ""
        )}>
          {movies?.length > 0 && movies.map((movie) => {
            const randomKey = generateRandomKey(20);
            return (
            <a 
              key={randomKey}
              href={`/movie/${movie.id}`} 
              className={classNames(
                !isGridView ? styles.flexPosition : "",
              styles.movieBlock, "movie-block")}>
              <TextImage 
                id={movie?.id}
                orientation={isGridView}
              />
              <span className={classNames(
                !isGridView ? styles.gridPosition : "",
                "cta-btn" 
              )} >See More</span>
            </a>
          )})}
        </div>
      </div>
    </main>
  );
}

export default Home