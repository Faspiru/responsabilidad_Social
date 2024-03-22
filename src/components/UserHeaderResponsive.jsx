import { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/LogoCodigoFuturo.svg";
import HamburgerMenu from "./HamburgerMenu";
import PublicSideBar from "./PublicSideBar";
import styles from "./UserHeaderResponsive.module.scss";

export default function UserHeaderResponsive() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Capa semi-transparente detrás del sidebar */}
      {isOpen && (
        <div className={styles.overlay} onClick={handleCloseSidebar} />
      )}
      <div className={styles.container}>
        <Link to="/">
          <img src={logoImage} className={styles.logoImg} alt="Logo" />
        </Link>
        <div onClick={handleClick}>
          <HamburgerMenu isOpen={isOpen} />
        </div>
      </div>
      <div className={`${styles.sideBar} ${isOpen ? styles.sideBarOpen : ""}`}>
        <PublicSideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}
