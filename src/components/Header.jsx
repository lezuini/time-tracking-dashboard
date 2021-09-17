import { useEffect, useState } from "react";
import Avatar from "../images/avatar.png";

const Header = ({ setTimeframe }) => {
  const [activeButton, setActiveButton] = useState("weekly");
  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [firstTime, setFirstTime] = useState(true);

  const handleClick = (timeframe) => {
    setDisabled(true);
    setTimeframe(timeframe);
    setActiveButton(timeframe);
  };

  useEffect(() => {
    if (disabled) {
      setTimeout(
        () => {
          setDisabled(false);
          if (firstTime) {
            setFirstTime(false);
          }
        },
        firstTime ? 2600 : 1200
      );
    }
  }, [disabled, firstTime]);

  return (
    <header>
      <div className="user-background">
        <div className="user">
          <div className="avatar">
            <img
              src={Avatar}
              onLoad={() => setVisible(true)}
              alt="avatar"
              className={visible ? "visible" : undefined}
            />
          </div>
          <h1>
            <span>Report for </span>
            <p>Jeremy Robson</p>
          </h1>
        </div>
      </div>
      <ul className="tabs">
        <li>
          <button
            className={activeButton === "daily" ? "active" : undefined}
            onClick={(e) => {
              handleClick("daily");
            }}
            disabled={disabled}
          >
            Daily
          </button>
        </li>
        <li>
          <button
            className={activeButton === "weekly" ? "active" : undefined}
            onClick={() => {
              handleClick("weekly");
            }}
            disabled={disabled}
          >
            Weekly
          </button>
        </li>
        <li>
          <button
            className={activeButton === "monthly" ? "active" : undefined}
            onClick={() => {
              handleClick("monthly");
            }}
            disabled={disabled}
          >
            Monthly
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
