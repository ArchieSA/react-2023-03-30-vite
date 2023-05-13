import { Rating } from "../../components/Rating/Rating";
import React, { useReducer, useState } from "react";

const initialState = {
  name: "",
  text: "",
  rating: 5,
};

const reducer = (state, action) => {
  switch (action?.type) {
    case "setName":
      return { ...initialState, name: action.payload };
    case "setText":
      return { ...state, text: action.payload };
    case "setRating":
      return action.payload > 5
        ? state
        : { ...state, rating: Number(action.payload) || 5 };

    default:
      return state;
  }
};

export const NewReviewForm = () => {
  const [formValue, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <label>Name</label>
        <input
          value={formValue.name}
          onChange={(event) =>
            dispatch({ type: "setName", payload: event.target.value })
          }
        />
      </div>
      <div>
        <label>Text</label>
        <input
          value={formValue.text}
          onChange={(event) =>
            dispatch({ type: "setText", payload: event.target.value })
          }
        />
      </div>
      <div>
        <label>Rating</label>
        <Rating
          value={formValue.rating}
          onChange={(rating) =>
            dispatch({ type: "setRating", payload: rating })
          }
        />
      </div>
    </div>
  );
};
