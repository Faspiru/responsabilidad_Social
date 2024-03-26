import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import codigoBack from "../assets/Code.png";
import foros from "../assets/Foros.jpg";
import orientacion from "../assets/Orientacion.webp";
import autoevaluacion from "../assets/autoevaluacion.png";
import brecha from "../assets/brecha.jpg";
import entrevista from "../assets/entrevista.jpg";
import evaluacion from "../assets/evaluacion.jpg";
import feedback from "../assets/feedback.jpg";
import lenguajes from "../assets/lenguajes.png";
import pares from "../assets/pares.jpg";
import python from "../assets/python.png";
import pythonImage from "../assets/pythonImage.png";
import Calendar from "../components/Calendar";
import Divider from "../components/Divider";
import { formatDate } from "../utils/date";
import styles from "./MetodologiaPage.module.scss";
export default function ToursPage() {
  const [date, setDate] = useState(formatDate(new Date()));

  const dateTextMap = {
    "2024-04-26":
      "Introducción Teórica a la Programación: \n \n●  ¿Cómo Aprender? ¿Para qué sirve?",
    "2024-05-03":
      "Hola Mundo. Mi Primer Programa: \n\n● ¿Qué es un programa? (Presentación) \n\n● ¿Cómo Programo? (Presentación) \n\n● ¿Qué es un lenguaje de programación? (Presentación)\n\n● Primer Programa utilizando Python.(Práctica)",
    "2024-05-10":
      "La Base de Todo Programa: \n\n● Variables (Práctica)\n\n● Pedir cosas al usuario (Práctica)",
    "2024-05-17":
      "La Máquina Calcula para Ti: \n\n● Calculos en Python (Práctica)\n\n● Operaciones Lógicas (Práctica)",
    "2024-05-24": "Mi Primer Proyecto: \n\n● Mi primera calculadora (Práctica)",
    "2024-05-31":
      "¿Qué es un Bucle?: \n\n● Explicación Teórica (Presentación)\n\n● Bucles While (Práctica)\n\n● Bucles For (Práctica)",
    "2024-06-07": "¿Cuál es el Potencial de la Programación? \n\n● Charla",
    "2024-06-14":
      "¿Qué es una lista?: \n\n● Explicación Teórica (Presentación)\n\n● Listas en Python (Práctica)",
    "2024-06-21":
      "¿Qué es un diccionario?: \n\n● Explicación Teórica (Presentación)\n\n● Diccionarios en Python (Práctica)",
    "2024-06-28":
      "Administración de un Hospital: \n\n● Segundo Proyecto con todo lo aprendido (Práctica)",
    "2024-07-05":
      "La Inteligencia Artificial como el futuro de la humanidad: \n\n● Herramienta o Amenaza (Charla)",
    "2024-07-12": "Fin del Curso: \n\n● Despedida\n\n● Consejos para el Futuro",
  };

  // Función para obtener el texto correspondiente a la fecha seleccionada
  const selectedDateText = useMemo(() => dateTextMap[date], [date]);

  return (
    <>
      <Helmet title="Metodología y Aprendizaje"></Helmet>
      <header
        className={styles.banner}
        style={{ backgroundImage: `url(${codigoBack})` }}
      >
        <div className={styles.contentTitle}>
          <h1>
            METODOLOGÍA Y ACTIVIDADES <br></br> DEL PROYECTO
          </h1>
          <div className={styles.description}>
            Conoce nuestra metodología de trabajo así como nuestras actividades
            que crearán nuevos conocimientos.
          </div>
        </div>
      </header>
      <Divider>
        <h2>¿CÓMO TRABAJAMOS?</h2>
      </Divider>
      <section className={styles.explain}>
        <div className={styles.group}>
          <div className={styles.image}>
            <img src={lenguajes} alt="Lenguajes de Programacion mas usados" />
          </div>
          <div className={styles.content}>
            <h3 className={styles.paragraph}>Nuestra Metodología</h3>
            <p className={styles.paragraph}>
              En esta propuesta promulgamos la metodología de{" "}
              <strong> aprender haciendo </strong>
              donde incentivamos el aprendizaje gracias a ejercicios prácticos,
              esto combinado con explicaciones teóricas y presentaciones que
              dejarán nuevos conocimientos. 
            </p>
          </div>
        </div>
      </section>
      <Divider>
        <h2>NUESTRAS ACTIVIDADES</h2>
      </Divider>
      <section className={styles.explain}>
        <div className={styles.content}>
          <p className={styles.paragraph}>
            La metodología y actividades de este proyecto están diseñadas para
            involucrar activamente a los estudiantes y fomentar una integración
            significativa con la comunidad.
          </p>
        </div>
        <div className={styles.group}>
          <div className={styles.content}>
            <h3 className={styles.paragraph}>Cursos</h3>
            <p className={styles.paragraph}>
              Sesiones interactivas para la enseñanza de programación con
              ejercicios prácticos y proyectos reales.
            </p>
          </div>
          <div className={styles.image}>
            <img src={python} alt="Lenguaje de Programacion Python" />
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.content}>
            <h3 className={styles.paragraph}>Foros de Discusión</h3>
            <p className={styles.paragraph}>
              Espacios para resolver dudas y fomentar la colaboración entre los
              participantes.
            </p>
          </div>
          <div className={styles.image}>
            <img src={foros} alt="Foros" />
          </div>
        </div>

        <div className={styles.group}>
          <div className={styles.content}>
            <h3 className={styles.paragraph}>Orientación Vocacional</h3>
            <p className={styles.paragraph}>
              Asesoramiento para identificar el camino profesional adecuado en
              tecnología.
            </p>
          </div>
          <div className={styles.image}>
            <img src={orientacion} alt="Orientacion" />
          </div>
        </div>

        <div className={styles.group}>
          <div className={styles.content}>
            <h3 className={styles.paragraph}>Preparación para Entrevistas</h3>
            <p className={styles.paragraph}>
              Simulacros de entrevistas y talleres de redacción de CV.
            </p>
          </div>
          <div className={styles.image}>
            <img src={entrevista} alt="Preparacion Entrevista" />
          </div>
        </div>
      </section>
      <Divider>
        <h2>CRONOGRAMA TRIMESTRE 2324-3</h2>
      </Divider>
      <section className={styles.Content}>
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
      <Divider>
        <h2>EVALUACIÓN</h2>
      </Divider>
      <section className={styles.explain}>
        <div className={styles.group}>
          <div className={styles.image}>
            <img src={evaluacion} alt="Evaluacion" />
          </div>
          <div className={styles.content}>
            <h3 className={styles.paragraph}>Evaluaciones Técnicas</h3>
            <p className={styles.paragraph}>
              Proyectos periódicos de programación para medir la comprensión y
              aplicación práctica de Python por parte de los estudiantes
            </p>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.image}>
            <img src={autoevaluacion} alt="Autoevaluacion" />
          </div>
          <div className={styles.content}>
            <h3 className={styles.paragraph}>Autoevaluación</h3>
            <p className={styles.paragraph}>
              Encuestas de autoevaluación para que los estudiantes reflexionen
              sobre su aprendizaje y progreso
            </p>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.image}>
            <img src={pares} alt="Trabajo en Equipo" />
          </div>
          <div className={styles.content}>
            <h3 className={styles.paragraph}>Evaluación por Pares</h3>
            <p className={styles.paragraph}>
              Revisión entre compañeros de los proyectos de código para fomentar
              la colaboración y el aprendizaje mutuo.
            </p>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.image}>
            <img src={feedback} alt="Feedabck" />
          </div>
          <div className={styles.content}>
            <h3 className={styles.paragraph}>Feedback de Instructores</h3>
            <p className={styles.paragraph}>
              Comentarios constructivos de los instructores sobre las tareas y
              proyectos para guiar el desarrollo de habilidades.
            </p>
          </div>
        </div>
      </section>
      <Divider>
        <h2>RESULTADOS ESPERADOS</h2>
      </Divider>
      <section className={styles.explain}>
        <div className={styles.group}>
          <div className={styles.image}>
            <img src={pythonImage} alt="Python" />
          </div>
          <div className={styles.content}>
            <h3 className={styles.paragraph}>Competencia en Python</h3>
            <p className={styles.paragraph}>
              La comunidad aprende los fundamentos de la programación en Python
              y desarrolla habilidades para resolver problemas y pensar de forma
              lógica.
            </p>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.image}>
            <img src={foros} alt="Redes" />
          </div>
          <div className={styles.content}>
            <h3 className={styles.paragraph}>Colaboración y Redes</h3>
            <p className={styles.paragraph}>
              La comunidad desarrolla habilidades de trabajo en equipo y
              establecen conexiones profesionales en conjunto con su preparación
            </p>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.image}>
            <img src={brecha} alt="Brecha Digital" />
          </div>
          <div className={styles.content}>
            <h3 className={styles.paragraph}>Reducción Brecha</h3>
            <p className={styles.paragraph}>
              Se reduce la brecha digital entre las comunidades de diferentes
              niveles socioeconómicos convirtiéndose en ciudadanos más activos y
              participativos en la sociedad.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
