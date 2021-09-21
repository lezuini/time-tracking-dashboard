import React, { useEffect, useState } from "react";

import { ReactComponent as EllipsisIcon } from "../images/icon-ellipsis.svg";
import { ReactComponent as PlayIcon } from "../images/icon-play.svg";
import { ReactComponent as WorkIcon } from "../images/icon-work.svg";
import { ReactComponent as StudyIcon } from "../images/icon-study.svg";
import { ReactComponent as ExerciseIcon } from "../images/icon-exercise.svg";
import { ReactComponent as SocialIcon } from "../images/icon-social.svg";
import { ReactComponent as SelfCareIcon } from "../images/icon-self-care.svg";

const Card = ({ el, timeframe }) => {
  let report = el.timeframes;
  let { title } = el;

  const [color, setColor] = useState("");
  const [loading, setLoading] = useState(false);

  const [lastCurrent, setLastCurrent] = useState(report[timeframe].current);
  const [lastPrevious, setLastPrevious] = useState(report[timeframe].previous);
  const [lastRecord, setLastRecord] = useState("Last Week");
  const [firstTime, setFirstTime] = useState(true);

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
  }, [title]);

  useEffect(() => {
    setTimeout(() => {
      setFirstTime(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      if (timeframe === "daily") {
        setLastRecord("Yesterday");
      } else if (timeframe === "weekly") {
        setLastRecord("Last Week");
      } else if (timeframe === "monthly") {
        setLastRecord("Last Month");
      }

      setLastCurrent(report[timeframe].current);
      setLastPrevious(report[timeframe].previous);
    }, 400);

    setTimeout(() => {
      setLoading(false);
    }, 820);
  }, [timeframe, report]);

  return (
    <article className={firstTime ? "card" : loading ? `card loading` : `card`}>
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
            <span>Menu</span>
            <EllipsisIcon />
          </button>
        </div>
        <div className="time">
          <div className="hours">{lastCurrent}hrs</div>
          <div className="previous">
            {lastRecord} - {lastPrevious}hrs
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
