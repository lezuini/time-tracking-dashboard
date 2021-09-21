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
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/leonardomeza87/time-tracking-dashboard/main/src/db/data.json"
        );
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error(error);
        setData(null);
      }
    };

    callDB();
  }, []);

  useEffect(() => {
    if (data) {
      for (let i = 0; i < data.length; i++) {
        setTimeout(() => {
          setDataToShow((dataToShow) => [...dataToShow, data[i]]);
        }, 200 * i);
      }
    }
  }, [data]);

  return (
    <main className="app">
      <Header setTimeframe={setTimeframe} data={data} />
      {dataToShow.length > 0 &&
        dataToShow.map((el) => {
          return <Card el={el} key={el.title} timeframe={timeframe} />;
        })}
      {dataToShow.length === 0 && (
        <div className="loader-container">
          {data === null ? (
            <h2>An error occurred on the server</h2>
          ) : (
            <div className="loader"></div>
          )}
        </div>
      )}
    </main>
  );
}

export default App;
