import { useContext } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";
import { ThemeContext } from "../../contexts/ThemeContext/themeContext";

const buttonStyles = {
  primary: styles.primary,
  secondary: styles.secondary,
};

export function Button({
  children,
  disabled,
  type = "primary",
  className,
  onClick,
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(styles.root, buttonStyles[type], className, {
        [styles.disabled]: disabled,
      })}
    >
      {children}
    </button>
  );
}
