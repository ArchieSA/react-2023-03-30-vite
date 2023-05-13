import { Header } from "../../components/Header/Header";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header className={styles.header} />
      <div className={styles.content}>{children}</div>
      <footer className={styles.footer}>
        <Link to="/contacts/about-us" className={styles.link}>
          Info about us
        </Link>
        <Link to="/contacts/addresses" className={styles.link}>
          Addresses
        </Link>
      </footer>
    </div>
  );
};
