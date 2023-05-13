import classNames from "classnames";

import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export const Header = ({ className }) => {
  return (
    <header className={classNames(styles.root, className)}>
      <img src="/images/logo.png" alt="" />
      <div className={styles.links}>
        <Link to="/" className={styles.link}>
          Главная
        </Link>
        <Link to="/restaurants" className={styles.link}>
          Рестораны
        </Link>
        <Link to="/cart" className={styles.link}>
          Корзина
        </Link>
      </div>
    </header>
  );
};
