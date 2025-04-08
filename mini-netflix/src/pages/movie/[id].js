import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import generateRandomKey from '@/utils/utils';
import styles from "./index.module.css"


export default function MovieDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);
  const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;

  useEffect(() => {
    if (!id) return;
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data)});
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
    <div className='container'>
      <div className={styles.detailBlock}>
      {movie.Response === "True" ? 
      <>
        <img src={movie.Poster || '/clapboard.png'} alt={`Poster of ${movie.Title}`} />
        <h2>Movie Name: {movie.Title}</h2>
        <p>{movie.Plot}</p>
        <h4>Ratings</h4>
        {movie?.Ratings?.length > 0 &&
          movie.Ratings.map((rate, ) => {
            const randomKey = generateRandomKey(20);
            return (
              <>
                <p key={randomKey}>{rate.Source}: {rate.Value}</p>
            </>
          )})
        }
        
        <p>imdbRating : {movie.imdbRating}</p>
        </>
        :
        <>
          <img src='/clapboard.png' alt='Poster of Clapboard' />
          <h3>Incorrect Movie ID</h3>
        </>}
      </div> 
      
    </div>
    </div>
  );
}