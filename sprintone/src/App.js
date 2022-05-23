import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import "./App.css";
import axios from 'axios'
export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
      axios.get('https://json-server-mocker-masai.herokuapp.com/candidates').then((res)=>{
      setData(res.data)
      })

  }, [])
  

  return (
    <div className="App">
      <div>
        <div id="loading-container">...Loading</div>

        <Button id="SORT_BUTTON" title={`Sort by Ascending Salary`} />
        <Button title="PREV" id="PREV" />
        <Button id="NEXT" title="NEXT" />
        {
          data.map((item ,ind)=>{
            return <CandidateCard key={ind} {...item} />
          })
        }

      </div>
      {data.map((item) => {})}
    </div>
  );
}
