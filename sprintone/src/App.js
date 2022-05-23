import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import "./App.css";
import axios from 'axios'
export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [order ,setOrder] = useState("ASC");
  const [orderTitle, setOrderTitle] = useState("Sort by Descending Salary");
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
      axios.get('https://json-server-mocker-masai.herokuapp.com/candidates',{
      // axios.get('http://localhost:3001/candidates',{
        params:{
          _limit:5,
          _page:page,
          _sort:"salary",
          _order:order
        }
      }).then((res)=>{
        setData(res.data);
        setLoading(false)
      })

  }, [page,order])
  
  const handlePage = (a) =>{
    setPage(page+a)
  }


  const handleOrder = () =>{
      if(order === "ASC"){
        setOrder("DESC");
        setOrderTitle("Sort by Ascending Salary")
      }else{
        setOrder("ASC");
        setOrderTitle("Sort by Descending Salary")
      }
  }

  return (
    <div className="App">
      <div>
        {
          loading ? <div id="loading-container">...Loading</div> : null
        }

        <Button id="SORT_BUTTON" title={orderTitle} onClick={handleOrder}/>
        <Button title="PREV" id="PREV" page={page} onClick={()=>handlePage(-1)}/>
        <Button id="NEXT" title="NEXT"  page={page} onClick={()=>handlePage(1)}/>
      </div>
      {
          data.map((item ,ind)=>{
            return <CandidateCard key={ind} {...item} />
          })
        }
    </div>
  );
}
