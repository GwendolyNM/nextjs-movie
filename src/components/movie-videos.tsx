import styles from '@/styles/movie-videos.module.css';

const API_URL = `https://nomad-movies.nomadcoders.workers.dev/movies`;

interface MovieVideoProps {
  id: number;
}

interface Video {
  id: string;
  key: string;
  name: string;
}

async function getVideos(id: number): Promise<Video[]> {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error('something broken');
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}

export default async function MovieVideos({ id }: MovieVideoProps) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title={video.name}
        />
      ))}
    </div>
  );
}
