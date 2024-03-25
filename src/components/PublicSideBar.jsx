import { Link } from "react-router-dom";
import logoImage from "../assets/LogoCodigoFuturo.svg";
import styles from "./PublicSideBar.module.scss";

export default function PublicSideBar({ isOpen, setIsOpen }) {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <Link to="/" onClick={handleClick}>
        <div className={styles.imgContainer}>
          <img src={logoImage} className={styles.logoImg}></img>
        </div>
      </Link>
      <Link to="/" onClick={handleClick} className={styles.option}>
        Inicio
      </Link>
      <Link to="/ods" onClick={handleClick} className={styles.option}>
        ODS
      </Link>
      <Link
        to="/metodologiaYactividades"
        onClick={handleClick}
        className={styles.option}
      >
        Metodologia y Actividades
      </Link>
      <Link
        to="/contextoYComunidad"
        onClick={handleClick}
        className={styles.option}
      >
        Contexto y Comunidad
      </Link>
      <Link
        to="/quienesSomos"
        onClick={handleClick}
        className={styles.optionSpe}
      >
        ¿Quiénes Somos?
      </Link>
    </div>
  );
}
