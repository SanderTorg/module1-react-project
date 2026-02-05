import styles from "./eventCard.module.css";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
}

export default function EventCard({ title, date, location }: EventCardProps) {
  return (
    <article className={styles.eventCard}>
      <div className={styles.dateTag}>
        <span className={styles.dateText}>{date}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.locationWrapper}>
          <svg
            className={styles.locationIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <p className={styles.location}>{location}</p>
        </div>
      </div>
      <div className={styles.shimmer}></div>
    </article>
  );
}
