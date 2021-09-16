import { useEffect, useState } from "react";

import "./App.scss";

import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState(null);
  const [timeframe, setTimeframe] = useState(1);

  useEffect(() => {
    const callApi = async () => {
      const res = await fetch(
        "https://leonardomeza87.github.io/time-tracking-dashboard/db/data.json"
      );
      const json = await res.json();
      console.log(json);
      setData(json);
    };

    callApi();
  }, []);

  return (
    <div className="app">
      <Header setTimeframe={setTimeframe} />
      {data &&
        data.map((el, index) => {
          return (
            <Card el={el} key={el.title} delay={index} timeframe={timeframe} />
          );
        })}
    </div>
  );
}

export default App;
