import { Helmet } from "react-helmet-async";
import MediaQuery from "react-responsive";
import educacionImage from "../assets/educacionImage.jpeg";
import emprendimientoImage from "../assets/emprendimientoImage.jpeg";
import odsBack from "../assets/fondoODS.jpeg";
import ods4Image from "../assets/ods4.jpeg";
import ods5Image from "../assets/ods5.jpeg";
import ods8Image from "../assets/ods8.jpeg";
import tecnologiaImage from "../assets/tecnologiaImage.jpeg";
import Divider from "../components/Divider";
import styles from "./OdsPage.module.scss";

export default function OdsPage() {
  return (
    <>
      <Helmet title="ODS"></Helmet>
      <header
        className={styles.banner}
        style={{ backgroundImage: `url(${odsBack})` }}
      >
        <div className={styles.contentTitle}>
          <h1>
            Conoce un poco más sobre las áreas y los objetivos de desarrollo
            sostenible asociados al proyecto
          </h1>
          <div className={styles.description}>
            Según el programa de las Naciones Unidas para el Desarrollo: "Los
            Objetivos de Desarrollo Sostenible, fueron adoptados por las
            Naciones Unidas en 2015 como un llamamiento universal para poner fin
            a la pobreza, proteger el planeta y garantizar que para el 2030
            todas las personas disfruten en paz y prosperidad"
          </div>
        </div>
      </header>
      <Divider>
        <MediaQuery maxWidth={599}>
          <h2>ODS</h2>
        </MediaQuery>
        <MediaQuery minWidth={600}>
          <h2>OBJETIVOS DE DESARROLLO SOSTENIBLE</h2>
        </MediaQuery>
      </Divider>
      <div className={styles.aboutUs}>
        <div className={styles.group}>
          <div className={styles.image}>
            <img src={ods4Image} alt="" />
          </div>
          <div className={styles.content}>
            <h3 className={styles.paragraph}>Educación de Calidad</h3>
            <p className={styles.paragraph}>
              Promovemos la inclusión y la equidad en la educación al
              proporcionar acceso a cursos de programación en Python para la
              comunidad, por ende, el objetivo es utilizar la tecnología para
              garantizar un aprendizaje de calidad
            </p>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.image}>
            <img src={ods5Image} alt="" />
          </div>
          <div className={styles.content}>
            <h3 className={styles.paragraph}>Igualdad de Género</h3>
            <p className={styles.paragraph}>
              Nos esforzamos por cerrar la brecha de género en el campo de la
              tecnología, ofreciendo igualdad de oportunidades para que mujeres
              y hombres aprendan habilidades de programación y accedan a empleos
              en tecnología
            </p>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.image}>
            <img src={ods8Image} alt="" />
          </div>
          <div className={styles.content}>
            <h3 className={styles.paragraph}>
              Trabajo Decente y Crecimiento Económico
            </h3>
            <p className={styles.paragraph}>
              Al capacitar a las personas con habilidades digitales demandadas,
              facilitamos su inserción en el mercado laboral tecnológico,
              contribuyendo al crecimiento económico sostenible y al trabajo
              decente
            </p>
          </div>
        </div>
      </div>
      <Divider>
        <MediaQuery maxWidth={599}>
          <h2>ÁREAS DEL PROYECTO</h2>
        </MediaQuery>
        <MediaQuery minWidth={600}>
          <h2>ÁREAS A LAS QUE PERTENECE EL PROYECTO</h2>
        </MediaQuery>
      </Divider>
      <div className={styles.aboutUsCo}>
        <div className={styles.groupCo}>
          <div className={styles.image}>
            <img src={educacionImage} alt="" />
          </div>
          <div className={styles.content}>
            <h3 className={styles.paragraph}>Educación</h3>
            <p className={styles.paragraph}>
              La propuesta de proyecto planteada proporciona oportunidades de
              aprendizaje significativas al impartir clases de programación
              básica a las comunidades vulnerables. Al capacitar a los miembros
              de la comunidad, se está contribuyendo con su desarrollo
              profesional y personal
            </p>
          </div>
        </div>
        <div className={styles.groupCo}>
          <div className={styles.image}>
            <img src={tecnologiaImage} alt="" />
          </div>
          <div className={styles.content}>
            <h3 className={styles.paragraph}>Tecnología</h3>
            <p className={styles.paragraph}>
              EL proyecto se centra en el aprendizaje de un lenguaje básico de
              programación, la cual es una habilidad tecnológica fundamental en
              el mundo actual. De esta manera, se contribuye a reducir la brecha
              digital al permitir que los beneficiarios del proyecto se integren
              y participen en la era tecnológica
            </p>
          </div>
        </div>
        <div className={styles.groupCo}>
          <div className={styles.image}>
            <img src={emprendimientoImage} alt="" />
          </div>
          <div className={styles.content}>
            <h3 className={styles.paragraph}>Emprendimiento</h3>
            <p className={styles.paragraph}>
              Al capacitar a los miembros de la comunidad en programación, se
              fomenta la creatividad y la innovación.Estas habilidades son
              esenciales para que las personas puedan iniciar sus propios
              proyectos tecnológicos, lo que conduce a la generación de empleo
              para los miembros de la comunidad
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
