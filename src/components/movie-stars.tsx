import styles from '@/styles/movie-info.module.css';

export function StarRating({ rating }: { rating: number }) {
  const totalStars = 5;
  const fullStars = Math.floor(rating / 2);
  const partialStars = (rating / 2 - fullStars) * 100; // 소수점을 퍼센트로 변환
  const emptyStars = totalStars - fullStars - (partialStars ? 1 : 0);

  return (
    <div className={styles.stars}>
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <span key={`full-${i}`} className={`${styles.star} ${styles.filled}`}>
            ★
          </span>
        ))}
      {partialStars ? (
        <span className={styles.star}>
          <span
            className={styles.partial}
            style={{ width: `${partialStars}%` }}
          >
            ★
          </span>
        </span>
      ) : null}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <span key={`empty-${i}`} className={styles.star}>
            ★
          </span>
        ))}
    </div>
  );
}
