import React from "react";
import { ReactComponent as EllipsisIcon } from "../images/icon-ellipsis.svg";

const Card = ({ el, timeframe }) => {
  let option = 0;

  if (timeframe === 0) {
    option = "daily";
  } else if (timeframe === 1) {
    option = "weekly";
  } else if (timeframe === 2) {
    option = "monthly";
  }
  return (
    <div className="card">
      <div className="background"></div>
      <div className="info">
        <div className="title">
          <h1>{el.title}</h1>
          <button>
            <EllipsisIcon />
          </button>
        </div>
        <div className="time">
          <div className="hours">{el.timeframes[option].current}</div>
          <div className="previous">{el.timeframes[option].previous}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
