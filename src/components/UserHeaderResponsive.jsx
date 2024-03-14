import { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/LogoSartViews.svg";
import HamburgerMenu from "./HamburgerMenu";
import PublicSideBar from "./PublicSideBar";
import styles from "./UserHeaderResponsive.module.scss";

export default function UserHeaderResponsive() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div>
        <div
          className={`${styles.sideBar} ${isOpen ? styles.sideBarOpen : ""}`}
        >
          <PublicSideBar></PublicSideBar>
        </div>
      </div>
      <div className={styles.container}>
        <Link to="/">
          <img src={logoImage} className={styles.logoImg}></img>
        </Link>
        <>
          <div onClick={handleClick}>
            <HamburgerMenu></HamburgerMenu>
          </div>
        </>
      </div>
    </div>
  );
}
