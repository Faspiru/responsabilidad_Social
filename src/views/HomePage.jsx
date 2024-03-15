import { Helmet } from "react-helmet-async";
import salaMendozaImage from "../assets/SalaMendoza.jpg";
import ArtesaniaImage from "../assets/SalaMendozaArtesania.jpg";
import bannerImage from "../assets/home-banner.png";
import missionImage from "../assets/home-mission.png";
import Button from "../components/Button";
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
          <h1>Vive la experiencia SartView</h1>
          <p>
            Bienvenido a SartViews! en este website podrás conocer lo más
            relevante sobre las obras de arte integradas a la Unimet. Así mismo,
            podrás realizar reservas para paseos guiados en referencia a estas
            obras y muchas cosas más!
          </p>
          <Button href="/login" size="large">
            A jugar papiiii
          </Button>
        </div>
      </header>
      <section>
        <Divider>
          <h2>SOBRE NOSOTROS</h2>
        </Divider>
        <div className={styles.aboutUs}>
          <div className={styles.group}>
            <div className={styles.image}>
              <img src={missionImage} alt="" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.paragraph}>Nuestra misión</h3>
              <p className={styles.paragraph}>
                Ofrecer un servicio de recorridos guíados por las distintas
                obras de arte expuestas en la Universidad Metropolitana.
              </p>
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.image}>
              <img src={ArtesaniaImage} alt="" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.paragraph}>Nuestra visión</h3>
              <p className={styles.paragraph}>
                Fomentar el interés por las obras de arte expuestas en la
                Universidad Metropolitana.
              </p>
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.image}>
              <img src={salaMendozaImage} alt="" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.paragraph}>Nuestro objetivo</h3>
              <p className={styles.paragraph}>
                Incentivar a todas los estudiantes y profesores de la
                Universidad Metropoltiana, a conocer las obras de arte expuestas
                en el campus, así como ofrecerles un sistema de recorridos
                guiados, para que puedan conocer su historia y característcias
                importantes
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
