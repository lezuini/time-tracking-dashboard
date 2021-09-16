import React, { useEffect, useState } from "react";
import { ReactComponent as EllipsisIcon } from "../images/icon-ellipsis.svg";
import { ReactComponent as PlayIcon } from "../images/icon-play.svg";
import { ReactComponent as WorkIcon } from "../images/icon-work.svg";
import { ReactComponent as StudyIcon } from "../images/icon-study.svg";
import { ReactComponent as ExerciseIcon } from "../images/icon-exercise.svg";
import { ReactComponent as SocialIcon } from "../images/icon-social.svg";
import { ReactComponent as SelfCareIcon } from "../images/icon-self-care.svg";

const Card = ({ el, delay, timeframe }) => {
  const [color, setColor] = useState("");
  const [loading, setLoading] = useState(true);

  let report = el.timeframes;
  let { title } = el;

  const [option, setOption] = useState("weekly");
  const [lastCurrent, setLastCurrent] = useState(report[option].current);
  const [lastPrevious, setLastPrevious] = useState(report[option].previous);
  const [lastRecord, setLastRecord] = useState("");
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFirstTime(false);
    }, 700);
  }, []);

  useEffect(() => {
    if (timeframe === 0) {
      setOption("daily");
    } else if (timeframe === 1) {
      setOption("weekly");
    } else if (timeframe === 2) {
      setOption("monthly");
    }

    setLoading(true);

    setTimeout(() => {
      if (timeframe === 0) {
        setLastRecord("Yesterday");
      } else if (timeframe === 1) {
        setLastRecord("Last Week");
      } else if (timeframe === 2) {
        setLastRecord("Last Month");
      }

      setLastCurrent(report[option].current);
      setLastPrevious(report[option].previous);
    }, 160);

    setTimeout(
      () => {
        setLoading(false);
      },
      firstTime ? 700 : 420
    );

    console.log("aaa");
  }, [timeframe, option]);

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
    <div
      className={
        loading
          ? firstTime
            ? `card delay${delay} start loading`
            : `card delay${delay} loading`
          : `card delay${delay}`
      }
    >
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
          <div className="hours">{lastCurrent}hrs</div>
          <div className="previous">
            {lastRecord} - {lastPrevious}hrs
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
