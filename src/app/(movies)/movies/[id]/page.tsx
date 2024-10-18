import MovieInfo, { getMovie } from '@/components/movie-info';
import MovieVideos from '@/components/movie-videos';
import React, { Suspense } from 'react';

interface MovieDetailProps {
  params: { id: number };
}

export async function generateMetadata({ params: { id } }: MovieDetailProps) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

async function MovieDetail({ params: { id } }: MovieDetailProps) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie vedeos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

export default MovieDetail;
