import react from 'react';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import MovieList from './MovieList';

function Index2() {
  const [data, setData] = useState([]);

  const getData = () => {
    return fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((item) => setData(item))
  }
console.log()

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Tonight show</h1>
     
        {data.map((dataObj) => {
          return (
            <div style={{ width: "300px", backgroundColor: "#938ae9",padding: 2,borderRadius: 10,marginBlock: 10, color:'#333',
              }}
            ><img src='https://images.moneycontrol.com/static-mcnews/2023/01/shah-rukh-khan-in-pathaan-770x433.jpg?impolicy=website&width=770&height=431' width={150} height={100} ></img>
            
              <div style={{ fontSize: 20, color: 'white' }}>{dataObj.show.name}</div>
              <ul><li><Link to="/">home</Link></li></ul>
             <button style={{backgroundColor: 'white',width:'100px',height:'26px',border:'none' ,color:'black'}}>More Info</button>
            </div> 
          );  
        })}
      
    </div>
  );
}

export default Index2;