import Image from 'next/image';
import styles from '@/styles/movie-info.module.css';
import { StarRating } from './movie-stars';
import Link from 'next/link';

const API_URL = `https://nomad-movies.nomadcoders.workers.dev/movies`;

interface MovieInfoProps {
  id: number;
}

export async function getMovie(id: number) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export default async function MovieInfo({ id }: MovieInfoProps) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <Image
        className={styles.poster}
        src={movie.poster_path}
        alt={movie.title}
        width={300}
        height={400}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <StarRating rating={movie.vote_average} />
        <span>{movie.vote_average.toFixed(1)}</span>
        <p>{movie.overview}</p>
        <Link href={movie.homepage} target={'_blank'}>
          Homepage &rarr;
        </Link>
      </div>
    </div>
  );
}
