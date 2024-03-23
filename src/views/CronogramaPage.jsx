import { useMemo, useState } from "react";
import CalendarImage from "../assets/CalendarImage.jpeg";
import Calendar from "../components/Calendar";
import { formatDate } from "../utils/date";
import styles from "./CronogramaPage.module.scss";

export default function CronogramaPage() {
  const [date, setDate] = useState(formatDate(new Date()));

  const dateTextMap = {
    "2024-04-26":
      "- Realizar esto esto esto y esto \n \n- Realizar esto esto esto y esto",
    "2024-05-03": "Texto para la fecha 23 de marzo de 2024",
    "2024-05-10": "Texto para la fecha 23 de marzo de 2024",
    "2024-05-17": "Texto para la fecha 23 de marzo de 2024",
    "2024-05-24": "Texto para la fecha 23 de marzo de 2024",
    "2024-05-31": "Texto para la fecha 23 de marzo de 2024",
    "2024-06-07": "Texto para la fecha 23 de marzo de 2024",
    "2024-06-14": "Texto para la fecha 23 de marzo de 2024",
    "2024-06-21": "Texto para la fecha 23 de marzo de 2024",
    "2024-06-28": "Texto para la fecha 23 de marzo de 2024",
    "2024-07-05": "Texto para la fecha 23 de marzo de 2024",
    "2024-07-12": "Texto para la fecha 23 de marzo de 2024",
  };

  // Función para obtener el texto correspondiente a la fecha seleccionada
  const selectedDateText = useMemo(() => dateTextMap[date], [date]);

  return (
    <>
      <header
        className={styles.banner}
        style={{ backgroundImage: `url(${CalendarImage})` }}
      >
        <div className={styles.textContainer}>
          <div className={styles.title}>
            Mantente al tanto de los próximos eventos del proyecto para servicio
            comunitario
          </div>
          <div className={styles.description}>
            En esta sección se pueden visualizar las acciones que se podrían
            tener programadas para una fecha específica. Principalmente esta
            orientado para un trimestre del año, en este caso el 2324-3
          </div>
        </div>
      </header>
      <section className={styles.content}>
        <div className={styles.column1}>
          <div className={styles.label}>Seleccionar fecha:</div>
          <Calendar
            availableDates={[
              "2024-04-26",
              "2024-05-03",
              "2024-05-10",
              "2024-05-17",
              "2024-05-24",
              "2024-05-31",
              "2024-06-07",
              "2024-06-14",
              "2024-06-21",
              "2024-06-28",
              "2024-07-05",
              "2024-07-12",
            ]}
            date={date}
            onChange={(date) => setDate(date)}
          />
        </div>
        <div className={styles.column2}>
          <div className={styles.label}>Acciones Importantes:</div>
          <div className={styles.acciones}>
            {selectedDateText || "Selecciona una fecha para ver el texto"}
          </div>
        </div>
      </section>
    </>
  );
}
