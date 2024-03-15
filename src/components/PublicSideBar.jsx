import { Link } from "react-router-dom";
import logoImage from "../assets/LogoSartViews.svg";
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
      <Link to="/obras" onClick={handleClick} className={styles.option}>
        Obras
      </Link>
      <Link to="/tours" onClick={handleClick} className={styles.option}>
        Tours
      </Link>
      <Link to="/calendario" onClick={handleClick} className={styles.option}>
        Calendario
      </Link>
      <Link to="/buscar" onClick={handleClick} className={styles.optionSpe}>
        Buscar
      </Link>
    </div>
  );
}
