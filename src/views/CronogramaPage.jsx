import { useMemo, useState } from "react";
import CalendarImage from "../assets/CalendarImage.jpeg";
import Calendar from "../components/Calendar";
import { formatDate } from "../utils/date";
import styles from "./CronogramaPage.module.scss";

export default function CronogramaPage() {
  const [date, setDate] = useState(formatDate(new Date()));

  const dateTextMap = {
    "2024-04-26":
      "Introducción Teórica a la Programación: \n \n- ¿Cómo Aprender? ¿Para qué sirve?",
    "2024-05-03": "Hola Mundo. Mi Primer Programa: \n\n-¿Qué es un programa? (Presentación) \n\n-¿Cómo Programo? (Presentación) \n\n-¿Qué es un lenguaje de programación? (Presentación)\n\n-Primer Programa utilizando Python.(Práctica)",
    "2024-05-10": "La Base de Todo Programa: \n\n-Variables (Práctica)\n\n-Pedir cosas al usuario (Práctica)",
    "2024-05-17": "La Máquina Calcula para Ti: \n\n-Calculos en Python (Práctica)\n\n-Operaciones Lógicas (Práctica)",
    "2024-05-24": "Mi Primer Proyecto: \n\n-Mi primera calculadora (Práctica)",
    "2024-05-31": "¿Qué es un Bucle?: \n\n-Explicación Teórica (Presentación)\n\n-Bucles While (Práctica)\n\n-Bucles For (Práctica)",
    "2024-06-07": "¿Cuál es el Potencial de la Programación? \n\n-Charla",
    "2024-06-14": "¿Qué es una lista?: \n\n-Explicación Teórica (Presentación)\n\n-Listas en Python (Práctica)",
    "2024-06-21": "¿Qué es un diccionario?: \n\n-Explicación Teórica (Presentación)\n\n-Diccionarios en Python (Práctica)",
    "2024-06-28": "Administración de un Hospital: \n\n-Segundo Proyecto con todo lo aprendido (Práctica)",
    "2024-07-05": "La Inteligencia Artificial como el futuro de la humanidad: \n\n-Herramienta o Amenaza (Charla)",
    "2024-07-12": "Fin del Curso: \n\n-Despedida\n\n-Consejos para el Futuro",
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
          <div className={styles.label}>Actividades para la fecha</div>
          <div className={styles.acciones}>
            {selectedDateText || "Selecciona una fecha para ver el texto"}
          </div>
        </div>
      </section>
    </>
  );
}
