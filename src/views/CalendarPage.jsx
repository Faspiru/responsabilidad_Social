import { useState } from "react";
import CalendarImage from "../assets/CalendarImage.jpeg";
import { formatDate } from "../utils/date";
import styles from "./CalendarPage.module.scss";

export default function CalendarPage() {
  const [date, setDate] = useState(formatDate(new Date()));

  return (
    <>
      <header
        className={styles.banner}
        style={{ backgroundImage: `url(${CalendarImage})` }}
      >
        <div className={styles.textContainer}>
          <div className={styles.title}>
            Mantente al tanto de los próximos eventos
          </div>
          <div className={styles.description}>
            En esta sección se pueden visualizar los proximos tours ofertados
            por SartViews. Se puede seleccionar una fecha específica y observar
            más detalles
          </div>
        </div>
      </header>
    </>
  );
}
