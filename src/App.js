import { useEffect, useState } from "react";

import "./App.scss";

import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState([]);
  const [dataToShow, setDataToShow] = useState([]);
  const [timeframe, setTimeframe] = useState("weekly");

  useEffect(() => {
    const callDB = async () => {
      const res = await fetch("https://ttd-db.herokuapp.com/report");
      const json = await res.json();
      // console.log(json);
      setData(json);
    };

    callDB();
  }, []);

  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      setTimeout(() => {
        setDataToShow((dataToShow) => [...dataToShow, data[i]]);
      }, 200 * i);
    }
  }, [data]);

  return (
    <div className="app">
      <Header setTimeframe={setTimeframe} />
      {dataToShow &&
        dataToShow.map((el) => {
          return <Card el={el} key={el.title} timeframe={timeframe} />;
        })}
    </div>
  );
}

export default App;
