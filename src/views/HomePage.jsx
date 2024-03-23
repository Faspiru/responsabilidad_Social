import { Helmet } from "react-helmet-async";
import adolescentesImage from "../assets/adolescentesImage.jpeg";
import aliadosImage from "../assets/aliadosImage.jpeg";
import codigoImage from "../assets/codigoImage.jpeg";
import {
  default as contextoImage,
  default as finalidadImage,
} from "../assets/contextoImage.jpeg";
import bannerImage from "../assets/home-banner.png";
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
              <img src={contextoImage} alt="" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.paragraph}>Contexto y Justificación</h3>
              <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus, aperiam nihil iusto error tenetur, quod quae
                inventore, deleniti voluptas magni harum nobis eveniet tempora
                dolores natus perferendis obcaecati vitae expedita?
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
              <img src={finalidadImage} alt="" />
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
          <div className={styles.group}>
            <div className={styles.image}>
              <img src={adolescentesImage} alt="" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.paragraph}>Población Beneficiaria</h3>
              <p className={styles.paragraph}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus expedita reprehenderit, nisi facere numquam corporis
                vel voluptatem praesentium, quibusdam nam laborum, quo cumque
                eveniet modi? Omnis ratione enim provident qui!
              </p>
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.image}>
              <img src={aliadosImage} alt="" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.paragraph}>Aliados y Colaboradores</h3>
              <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                eaque id voluptatum, reiciendis numquam architecto repellat
                facilis omnis dolore quae nam doloribus laborum dignissimos non
                cum, blanditiis explicabo? Dolorem, ab!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
