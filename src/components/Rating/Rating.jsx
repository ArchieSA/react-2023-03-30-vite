import classNames from "classnames";
import styles from "./styles.module.scss";

const MAX_RATING = 5;

const SIZES = {
  s: 16,
  m: 20,
  l: 24,
};

export const Rating = ({
  value,
  maxRating = MAX_RATING,
  className,
  onChange,
  size = "m",
}) => {
  return (
    <div className={className}>
      {maxRating > 0 &&
        new Array(maxRating).fill(null).map((_, index) => (
          <img
            src={`/images/star${index >= value ? "" : "-gold"}.png`}
            key={index}
            className={classNames(styles.star, {
              [styles.clickable]: !!onChange,
            })}
            width={SIZES[size]}
            height={SIZES[size]}
            alt={index >= value ? "black" : "gold"}
            onClick={() => onChange?.(index + 1)}
          />
        ))}
    </div>
  );
};
