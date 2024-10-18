import Movie from '@/components/movie';
import type { Metadata } from 'next';
import styles from '@/styles/home.module.css';
import { API_URL } from '../contents';

export const metadata: Metadata = {
  title: 'Home',
};

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

async function getMovies(): Promise<Movie[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(API_URL);
  const json = await res.json();
  return json;
}

async function Homepage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}

export default Homepage;
