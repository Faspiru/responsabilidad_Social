import styles from "./HamburgerMenu.module.scss";

export default function HamburgerMenu({ isOpen }) {
  return (
    <div className={styles.container}>
      <div className={`${styles.span} ${isOpen ? styles.open : ""}`}>
        <span className={`${styles.span1}`}></span>
        <span className={`${styles.span2}`}></span>
        <span className={`${styles.span3}`}></span>
      </div>
    </div>
  );
}
