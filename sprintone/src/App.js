import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import "./App.css";
import axios from 'axios'
export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  // const [order]

  useEffect(() => {
      // axios.get('https://json-server-mocker-masai.herokuapp.com/candidates',{
      axios.get('http://localhost:3001/candidates',{
        params:{
          _limit:5,
          _page:page,
          _sort:"salary",
          _order:"ASC"
        }
      }).then((res)=>{
      setData(res.data)
      })

  }, [page])
  
  const nextPage = () =>{
    setPage(page+1)
  }

  const prevPage = () =>{
    setPage(page-1)
  }

  return (
    <div className="App">
      <div>
        <div id="loading-container">...Loading</div>

        <Button id="SORT_BUTTON" title={`Sort by Ascending Salary`} />
        <Button title="PREV" id="PREV"  onClick={prevPage}/>
        <Button id="NEXT" title="NEXT" onClick={nextPage}/>
        {/* <button onClick={nextPage}>next</button> */}
      </div>
      {
          data.map((item ,ind)=>{
            return <CandidateCard key={ind} {...item} />
          })
        }
    </div>
  );
}
