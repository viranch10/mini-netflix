import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const API_KEY = '7ca96aa2';

export default function MovieDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`https://www.omdbapi.com/?apikey=7ca96aa2&i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data)});
  }, [id]);

  if (!movie) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img src={movie.Poster} alt={`Poster of ${movie.Title}`} className="rounded mb-4" />
      {console.log('movie: ', movie)}
      <h1 className="text-3xl font-bold mb-2">{movie.Title}</h1>
      <p className="mb-2">{movie.Plot}</p>
      <p className="text-lg font-medium">Rating: {movie.imdbRating}</p>
    </div>
  );
}