import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import logoImage from "../assets/LogoCodigoFuturo.svg";
import styles from "./Footer.module.scss";

export default function Footer() {
  const scrollToTopAndRedirect = () => {
    window.scrollTo(0, 0); // Desplaza la página hacia arriba
  };

  return (
    <>
      <MediaQuery maxWidth={870}>
        <div className={styles.footer}>
          <div onClick={scrollToTopAndRedirect}>
            <Link to="/">
              <img src={logoImage} className={styles.logoImg}></img>
            </Link>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={870}>
        {" "}
        <div className={styles.footer}>
          <div onClick={scrollToTopAndRedirect}>
            <Link to="/">
              <img src={logoImage} className={styles.logoImg}></img>
            </Link>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.center}>
              <h3>REFERENCIAS BIBLIOGRÁFICAS</h3>
            </div>
            <div>
              (s.f.). Objetivos de Desarrollo Sostenible | Programa De Las
              Naciones Unidas Para El Desarrollo. Recuperado el 25 de marzo de
              2024 de: https://www.undp.org/es/sustainable-development-goals
            </div>
            <div>
              Sulbarán,I. ¿Cuál es la importancia de la programación? (21 de
              febrero de 2024). Tiffin University. Recuperado el 25 de marzo de
              2024 de:
              https://global.tiffin.edu/noticias/importancia-de-la-programacion
            </div>
            <div>
              Vergara, F. Informe Mundial 2023: Venezuela. (2022). Human Rights
              Watch. Recuperado el 25 de marzo de 2024 de:
              https://www.hrw.org/es/world-report/2023/country-chapters/venezuela
            </div>
            <div>
              Situación de Venezuela. (s.f.). ACNUR. Recuperado el 25 de marzo
              de 2024 de:
              https://www.acnur.org/emergencias/situacion-de-venezuela
            </div>
          </div>
        </div>
      </MediaQuery>
    </>
  );
}
