import { Helmet } from "react-helmet-async";
import styles from "./ErrorPage.module.scss";

export default function ErrorPage() {
  return (
    <>
      <Helmet title="Error 404" />
      <div className={styles.container}>
        <h1>Página no encontrada 🚨</h1>
      </div>
    </>
  );
}
