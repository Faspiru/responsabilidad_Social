import { Helmet } from "react-helmet-async";
import DanImage from "../assets/dan.jpeg";
import fabrizioImage from "../assets/fabrizioImage.jpeg";
import maviImage from "../assets/maviImage.jpg";
import proposito2Image from "../assets/proposito2Image.jpeg";
import unimet from "../assets/unimet.jpg";
import Divider from "../components/Divider";
import styles from "./QuienesSomos.module.scss";

export default function QuienesSomosPage() {
  return (
    <>
      <Helmet title="¿Quiénes Somos?"></Helmet>
      <header
        className={styles.banner}
        style={{ backgroundImage: `url(${unimet})` }}
      >
        <div className={styles.contentTitle}>
          <h1>
            Conoce un poco más sobre los creadores de esta nueva propuesta de
            proyecto para servicio comunitario
          </h1>
          <div className={styles.description}>
            En este apartado, se encuentran los integrantes de la propuesta de
            proyecto, a continuación se puede conocer sobre ellos y cual es su
            trayectoria en la Universidad Metropoolitana
          </div>
        </div>
      </header>
      <section>
        <Divider>
          <h2>SOBRE NOSOTROS</h2>
        </Divider>
      </section>
      <section>
        <div className={styles.aboutUs}>
          <div className={styles.group}>
            <div className={styles.image}>
              <img src={maviImage} alt="" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.paragraph}>María Victoria Martinez</h3>
              <p className={styles.paragraph}>
                ¡Hola! Mi nombre es María Martínez, una apasionada estudiante de{" "}
                <b>Ingeniería de Sistemas</b> de 20 años, comprometida con el
                uso de la tecnología para el cambio social. Creo firmemente que
                la educación en programación es una herramienta poderosa que
                puede transformar vidas, ofreciendo nuevas oportunidades y
                perspectivas de empleo. Juntos, podemos construir una comunidad
                más fuerte y capacitada.
              </p>
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.image}>
              <img src={DanImage} alt="" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.paragraph}>Daniel Morillo</h3>
              <p className={styles.paragraph}>
                Hola! Mi nombre es Daniel Morillo, soy estudiante del Octavo
                Trimestre de la carrera de <b>Ingeniería de Sistemas</b> en la
                UNIMET. Me encantaría poder compartir mis conocimientos con
                personas que estén dispuestas a aprender y así aportar mi
                granito de arena en la comunidad.
              </p>
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.image}>
              <img src={fabrizioImage} alt="" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.paragraph}>Fabrizio Spiotta</h3>
              <p className={styles.paragraph}>
                Hola! Mi nombre es Fabrizio Spiotta, tengo 20 años y actualmente
                me encuentro en el octavo trimestre estudiando{" "}
                <b>Ingeniería de Sistemas</b>. Personalmente siento que esta
                propuesta de proyecto es de vital importancia, debido a que se
                transmiten los conocimientos básicos de la programación a las
                futuras generaciones.
              </p>
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.image}>
              <img src={proposito2Image} alt="" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.paragraph}>María Victoria Tatoli</h3>
              <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus hic consectetur totam fuga harum tenetur tempore, ab
                dolorum fugit maiores corporis vel esse ipsa, ea rerum assumenda
                alias veniam laboriosam!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
