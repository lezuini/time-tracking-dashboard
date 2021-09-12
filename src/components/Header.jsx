import Avatar from "../images/avatar.png";
import svg from "../images/icon-ellipsis.svg";

const Header = ({ setTimeframe }) => {
  const handleClick = (num) => {
    setTimeframe(num);
  };

  return (
    <header>
      <div className="user">
        <div className="avatar">
          <img src={Avatar} alt="a" />
        </div>
        <h1>
          <span>Report</span> for Jeremy Robson
        </h1>
      </div>
      <div className="tabs">
        <button
          onClick={() => {
            handleClick(0);
          }}
        >
          Daily
        </button>
        <button
          onClick={() => {
            handleClick(1);
          }}
        >
          Weekly
        </button>
        <button
          onClick={() => {
            handleClick(2);
          }}
        >
          Monthly
        </button>
      </div>
    </header>
  );
};

export default Header;
