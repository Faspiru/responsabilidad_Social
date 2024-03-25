import { Helmet } from "react-helmet-async";
import codigoImage from "../assets/codigoImage.jpeg";
import bannerImage from "../assets/home-banner.png";
import imageFinalidad from "../assets/imageFinalidad.jpeg";
import proposito2Image from "../assets/proposito2Image.jpeg";
import propositoImage from "../assets/propositoImage.jpeg";
import Divider from "../components/Divider";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <>
      <Helmet title="Inicio" />
      <header
        className={styles.banner}
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className={styles.bannerContent}>
          <h1>Vive la experiencia de Código Para El Futuro!</h1>
          <p>
            Bienvenido a Código Para el Futuro! en este website podrás conocer
            un poco sobre esta nueva propuesta de proyecto para servicio
            comunitario. A continuación se encuentra nuestro propósito, los
            objetivos de desarrollo sostenible asociados, los recursos
            requeridos, la población beneficiada y mucho más!
          </p>
        </div>
      </header>
      <section>
        <Divider>
          <h2>SOBRE EL PROYECTO</h2>
        </Divider>
        <div className={styles.aboutUs}>
          <div className={styles.group}>
            <div className={styles.image}>
              <img src={codigoImage} alt="" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.paragraph}>
                ¿Qué es Codigo Para el Futuro?
              </h3>
              <p className={styles.paragraph}>
                Es una propuesta de proyecto para realizar servicio comunitario
                en la Universidad Metropolitana. La idea principal es transmitir
                conocimientos básicos de programación a las comunidades más
                vulnerables de nuestro país.
              </p>
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.image}>
              <img src={propositoImage} alt="" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.paragraph}>Propósito</h3>
              <p className={styles.paragraph}>
                El propósito de "Código para el Futuro" es democratizar el
                acceso a la educación tecnológica en comunidades de bajos
                recursos, proporcionando un espacio inclusivo y recursos
                necesarios para el aprendizaje del lenguaje de programación
                Python.
              </p>
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.image}>
              <img src={proposito2Image} alt="" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.paragraph}>Propósito</h3>
              <p className={styles.paragraph}>
                Creemos firmemente que la tecnología es una herramienta poderosa
                para el cambio social y la movilidad ascendente. A través de
                "Código para el Futuro", aspiramos a crear un impacto positivo y
                duradero en la vida de las personas, sus familias y la comunidad
                en su conjunto.
              </p>
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.image}>
              <img src={imageFinalidad} alt="" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.paragraph}>Finalidad</h3>
              <p className={styles.paragraph}>
                Este proyecto tiene como finalidad principal no solo enseñar
                programación, sino también ofrecer una guía concreta y apoyo
                continuo para que los participantes puedan encontrar
                oportunidades de trabajo digno en el área de tecnología.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
