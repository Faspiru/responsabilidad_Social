import Loader from "./Loader";
import TourCard from "./TourCard";
import styles from "./ToursGrid.module.scss";

export default function ToursGrid({
  tours,
  size = "base",
  target,
  loader = (
    <div className={styles.loaderContainer}>
      <Loader />
    </div>
  ),
  fallback,
  more,
}) {
  return (
    <div className={[styles.grid, styles[size]].join(" ")}>
      {tours ? (
        tours.length > 0 ? (
          <>
            {tours.map((data) => (
              <TourCard key={data.id} data={data} size={size} target={target} />
            ))}
            {more}
          </>
        ) : (
          fallback
        )
      ) : (
        loader
      )}
    </div>
  );
}
