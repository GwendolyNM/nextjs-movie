import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import styles from '@/styles/movie.module.css';

interface movie {
  title: string;
  id: number;
  poster_path: string;
}

function Movie({ title, id, poster_path }: movie) {
  return (
    <div className={styles.movie}>
      <Link href={`/movies/${id}`}>
        <Image alt={title} src={poster_path} width={780} height={400}></Image>
        {title}
      </Link>
    </div>
  );
}

export default Movie;
