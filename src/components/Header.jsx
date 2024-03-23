import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import logoImage from "../assets/LogoCodigoFuturo.svg";
import styles from "./Header.module.scss";
import UserHeaderResponsive from "./UserHeaderResponsive";

export default function Header() {
  return (
    <>
      <MediaQuery maxWidth={870}>
        <UserHeaderResponsive></UserHeaderResponsive>
      </MediaQuery>
      <MediaQuery minWidth={870}>
        <div className={styles.header}>
          <Link to="/">
            <div className={styles.container}>
              <img src={logoImage} className={styles.logoImg}></img>
            </div>
          </Link>
          <div className={styles.textContainer}>
            <Link to="/" className={styles.links}>
              Inicio
            </Link>
            <Link to="/ods" className={styles.links}>
              ODS
            </Link>
            <Link to="/metodologiaYactividades" className={styles.links}>
              Metodologia y Actividades
            </Link>
            <Link to="/cronograma" className={styles.links}>
              Cronograma
            </Link>
            <Link to="/quienesSomos" className={styles.links}>
              ¿Quiénes Somos?
            </Link>
          </div>
        </div>
      </MediaQuery>
    </>
  );
}
