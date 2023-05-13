import React from "react";

import styles from "./styles.module.scss";

export const User = ({ user }) => {
  return <div className={styles.root}>{user.name}</div>;
};
