import { useEffect, useState } from "react";
import Avatar from "../images/avatar.png";

const Header = ({ setTimeframe }) => {
  const [active, setActive] = useState(1);
  const [visible, setVisible] = useState(false);

  const handleClick = (num) => {
    setTimeframe(num);
    setActive(num);
  };

  useEffect(() => {
    window.addEventListener("load", () => {
      setVisible(true);
    });
  }, []);

  return (
    <header>
      <div className="user-background">
        <div className="user">
          <div className="avatar">
            <img
              src={Avatar}
              alt="a"
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
            className={active === 0 ? "active" : undefined}
            onClick={() => {
              handleClick(0);
            }}
          >
            Daily
          </button>
        </li>
        <li>
          <button
            className={active === 1 ? "active" : undefined}
            onClick={() => {
              handleClick(1);
            }}
          >
            Weekly
          </button>
        </li>
        <li>
          <button
            className={active === 2 ? "active" : undefined}
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
