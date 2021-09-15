import React, { useEffect, useState } from "react";
import { ReactComponent as EllipsisIcon } from "../images/icon-ellipsis.svg";
import { ReactComponent as PlayIcon } from "../images/icon-play.svg";
import { ReactComponent as WorkIcon } from "../images/icon-work.svg";
import { ReactComponent as StudyIcon } from "../images/icon-study.svg";
import { ReactComponent as ExerciseIcon } from "../images/icon-exercise.svg";
import { ReactComponent as SocialIcon } from "../images/icon-social.svg";
import { ReactComponent as SelfCareIcon } from "../images/icon-self-care.svg";

const Card = ({ el, timeframe }) => {
  const [color, setColor] = useState("");

  let option = "";
  let lastRecord = "";
  let report = el.timeframes;
  let { title } = el;

  if (timeframe === 0) {
    option = "daily";
    lastRecord = "Yesterday";
  } else if (timeframe === 1) {
    option = "weekly";
    lastRecord = "Last Week";
  } else if (timeframe === 2) {
    option = "monthly";
    lastRecord = "Last Month";
  }

  useEffect(() => {
    switch (title) {
      case "Work":
        setColor("orange");
        break;
      case "Play":
        setColor("blue");
        break;
      case "Study":
        setColor("red");
        break;
      case "Exercise":
        setColor("green");
        break;
      case "Social":
        setColor("purple");
        break;
      case "Self Care":
        setColor("yellow");
        break;

      default:
        break;
    }
  }, []);

  return (
    <div className="card">
      <div className={"iconLayer " + color}>
        {title === "Work" ? (
          <WorkIcon />
        ) : title === "Play" ? (
          <PlayIcon />
        ) : title === "Study" ? (
          <StudyIcon />
        ) : title === "Exercise" ? (
          <ExerciseIcon />
        ) : title === "Social" ? (
          <SocialIcon />
        ) : (
          title === "Self Care" && <SelfCareIcon />
        )}
      </div>
      <div className="info">
        <div className="title">
          <h2>{title}</h2>
          <button>
            <EllipsisIcon />
          </button>
        </div>
        <div className="time">
          <div className="hours">{report[option].current}hrs</div>
          <div className="previous">
            {lastRecord} - {report[option].previous}hrs
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
