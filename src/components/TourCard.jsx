import { Link } from "react-router-dom";
import styles from "./TourCard.module.scss";

export default function TourCard({
  data: { id, name, description, department, images: imagePaths },
  size = "base",
  target = "details",
}) {
  return (
    <Link
      to={
        target === "admin"
          ? `/admin/tours/${id}`
          : target === "reserve"
          ? `/tours/${id}/reserve`
          : `/tours/${id}`
      }
      className={[styles.card, styles[size]].join(" ")}
    >
      <div className={styles.details}>
        <div className={styles.title}>{name}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.location}>{department}</div>
      </div>
    </Link>
  );
}
