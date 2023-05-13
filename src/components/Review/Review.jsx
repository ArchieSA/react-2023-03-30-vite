import { Rating } from "../../components/Rating/Rating";
import { UserContainer } from "../../containers/User/User";
import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";

export const Review = ({ review, className }) => {
  if (!review) {
    return null;
  }

  const { userId, text, rating } = review;

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.header}>
        <UserContainer userId={userId} />
        <Rating value={rating} size="s" />
      </div>
      <p>{text}</p>
    </div>
  );
};
