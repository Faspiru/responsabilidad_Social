import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import logoImage from "../assets/LogoSartViews.svg";
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
            <img src={logoImage} className={styles.logoImg}></img>
          </Link>
          <div className={styles.textContainer}>
            <Link to="/" className={styles.links}>
              Inicio
            </Link>
            <Link to="/tours" className={styles.links}>
              Tours
            </Link>
            <Link to="/obras" className={styles.links}>
              Obras
            </Link>
            <Link to="/calendario" className={styles.links}>
              Calendario
            </Link>
            <Link to="/buscar" className={styles.buscar}>
              Buscar
            </Link>
          </div>
        </div>
      </MediaQuery>
    </>
  );
}
