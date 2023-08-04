import React, { useEffect, useState } from "react";
import "./Home.css";
import Nav from "../Nav/Nav";
import Players from "../Players/Players";

const Home = () => {
  const [players,setPlayers]=useState([])
  const [search, setSearch] = useState("");
   
    useEffect(() => {
      fetch(
        `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${search}`
      )
        .then((res) => res.json())
        .then((data) => setPlayers(data?.player));
    }, [search]);
    // barbar change hole state e rakhchi
  console.log(players);
  return (
    <div>
      {/* <Nav></Nav> */}
      <div className="home-container">
        <div className="left-side">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="search-input"
          />
          <button className="search-btn">Search</button>
          <div className="players-container">
            <Players players={players}></Players>
          </div>
        </div>
        <div className="right-side">
          <div className="cart">
            <p>This is players cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
