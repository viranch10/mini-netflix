import Link from 'next/link';
import Image from 'next/image';
import { useEffect,useState } from 'react';

const TextImage = ({id, orientation}) => {
    const [movie, setMovie] = useState(null)
    const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY
    useEffect(() => {
        if (!id) return;
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
          .then((res) => res.json())
          .then((data) => {
            setMovie(data)});
      }, [id]);


      if (!movie) return <div>Loading...</div>;

    return (
        <div className="text-image">
          <Link key={id} href={`/movie/${id}`}>
            <div className={!orientation && "list-view"}>
              <Image
                src={movie?.Poster || '/clapboard.png'}
                alt={movie?.Title}
                width={!orientation ? 100 : 200}
                height={!orientation ? 100 : 300}
              />
                <div>
                    <h3>{movie?.Title}</h3>
                </div>
            </div>
          </Link>
        <style jsx>{`
          .list-view {
            display: flex;
            margin: auto;
          }

          .list-view h3 {
            margin-left: 10px;
          }

          img {
            object-fit: contain;
          }

          h3 {
            color: #FFF;
          }
        `}</style>
        </div>
    )
}

export default TextImage