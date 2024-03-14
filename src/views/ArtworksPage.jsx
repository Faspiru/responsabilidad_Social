import { Helmet } from "react-helmet-async";
import obrasBack from "../assets/obrasBack.jpg";
import styles from "./ArtworksPage.module.scss";

export default function ArtworksPage() {
  return (
    <>
      <Helmet title="Obras"></Helmet>
      <header
        className={styles.banner}
        style={{ backgroundImage: `url(${obrasBack})` }}
      >
        <div className={styles.contentTitle}>
          <h1>Conoce las obras de arte de la Universidad Metropolitana</h1>
          <div className={styles.description}>
            A continuación se encuentran todas las obras de la Unimet
            registradas en el sistema. Al hacer click sobre alguna de ellas se
            visualizan sus características más importantes.
          </div>
        </div>
      </header>
      <div className={styles.content}></div>
    </>
  );
}
