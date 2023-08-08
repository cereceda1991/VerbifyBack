import React from "react";
import styles from "@/styles/RatingStars.module.css";

function RatingStars(props: Props) {
  const { setRatingIndex, RatingIndex } = props;

  const RATING = ['Poor', 'Fair', 'Good', 'Very good', 'Excellent']; // Rating options
  const activeStar = {
    // This is the active star style
    fill: '#D39245',
    stroke: '#D39245'
  };

  const changeRatingIndex = (index: number) => {
    // This is the function that changes the rating index
    setRatingIndex(index);
  };

  return (
    <div className={styles.div}>
      <div className={styles.div}>
        {RATING.map((Rating, index) => (
          <Star
            index={index}
            key={Rating}
            changeRatingIndex={changeRatingIndex} // This is the function that changes the rating index
            style={RatingIndex >= index ? activeStar : {}}
          />
        ))}
      </div>
      {/* <h2 className="my-auto">{RATING[RatingIndex]}</h2> */}
    </div>
  );
}

export default RatingStars;

type Props = {
  RatingIndex: number;
  setRatingIndex: (index: number) => void; // This is the function that changes the rating index
};

function Star(props: any) {
  const { style, index, changeRatingIndex } = props;

  const changeRating = (e: any) => {
    changeRatingIndex(e.target.value);
  };

  return (
    <label className={styles.label}>
      <svg
        width="35"
        height="35"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#D39245"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={style} // This is the active star style yellow
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
      <input
        type="radio"
        name="rating"
        id={index}
        value={index}
        className={styles.input}
        onClick={changeRating}
      />
    </label>
  );
}

