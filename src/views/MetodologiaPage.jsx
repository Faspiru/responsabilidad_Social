import { Helmet } from "react-helmet-async";
import codigoBack from "../assets/Code.png";
import Divider from "../components/Divider";
import styles from "./MetodologiaPage.module.scss";
import lenguajes from "../assets/lenguajes.png"
import python from "../assets/python.png"

export default function ToursPage() {
  return (
    <>
      <Helmet title="Obras"></Helmet>
      <header
        className={styles.banner}
        style={{ backgroundImage: `url(${codigoBack})` }}
      >
        <div className={styles.contentTitle}>
          <h1>
            METODOLOGÍA Y ACTIVIDADES <br></br> DEL PROYECTO
          </h1>
          <div className={styles.description}>
            Conoce nuestra metodología de trabajo así como nuestras actividades que crearán nuevos conocimientos.
          </div>
        </div>
      </header>
      <Divider>
        <h1>¿Cómo Trabajamos?</h1>
      </Divider>
      <section className={styles.explain}>
        <div className={styles.group}>
          <div className={styles.image}>
            <img src={lenguajes} alt="Lenguajes de Programacion mas usados" />
          </div>
          <div className={styles.content}>
            <h3 className={styles.paragraph}>
              Nuestra Metodología y Actividades
            </h3>
            <p className={styles.paragraph}>
              En esta propuesta promulgamos la metodología de <strong> aprender haciendo </strong>
              donde incentivamos el aprendizaje gracias a ejercicios prácticos, esto combinado con
              explicaciones teóricas y presentaciones que dejarán nuevos conocimientos.
            </p>
          </div>
        </div>
      </section>
      <Divider>
          <h1>Nuestras Actividades</h1>
        </Divider>
      <section className={styles.explain}>
        <div className={styles.group}>
          <div className={styles.content}>
            <h3 className={styles.paragraph}>
              ¿Qué Haremos?
            </h3>
            <p className={styles.paragraph}>
              Haremos varias actividades con respecto a este mundo como <strong> presentaciones, 
              prácticas utilizando python y charlas, </strong>
              donde incentivamos el aprendizaje gracias a ejercicios prácticos, esto combinado con
              explicaciones teóricas y presentaciones que dejarán nuevos conocimientos.
            </p>
          </div>
          <div className={styles.image}>
            <img src={python} alt="Lenguaje de Programacion Python" />
          </div>
        </div>
      </section>
    </>
  );
}
