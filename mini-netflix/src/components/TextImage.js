import Link from 'next/link';
import Image from 'next/image';
import { useEffect,useState } from 'react';

const TextImage = ({id, orientation}) => {
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        if (!id) return;
        fetch(`https://www.omdbapi.com/?apikey=7ca96aa2&i=${id}`)
          .then((res) => res.json())
          .then((data) => {
            setMovie(data)});
      }, [id]);

    return (
        <div className="text-image">
          <Link key={id} href={`/movie/${id}`}>
          <div className={!orientation && "list-view"}>
              <Image
              src={movie?.Poster}
              alt={movie?.Title}
              width={!orientation ? 100 : 200}
              height={!orientation ? 100 : 300}
              className="rounded-md"
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
        `}</style>
        </div>
    )
}

export default TextImage