import { useState } from "react";
import Avatar from "../images/avatar.png";

const Header = ({ setTimeframe }) => {
  const [active, setActive] = useState(1);

  const handleClick = (num) => {
    setTimeframe(num);
    setActive(num);
  };

  return (
    <header>
      <div className="user">
        <div className="avatar">
          <img src={Avatar} alt="a" />
        </div>
        <h1>
          <span>Report for </span>Jeremy Robson
        </h1>
      </div>
      <ul className="tabs">
        <li>
          <button
            className={active === 0 && "active"}
            onClick={() => {
              handleClick(0);
            }}
          >
            Daily
          </button>
        </li>
        <li>
          <button
            className={active === 1 && "active"}
            onClick={() => {
              handleClick(1);
            }}
          >
            Weekly
          </button>
        </li>
        <li>
          <button
            className={active === 2 && "active"}
            onClick={() => {
              handleClick(2);
            }}
          >
            Monthly
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
