import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';

function App() {
  // const [players, setPlayers] = useState([]);
  // const [control, setControl] = useState(false);
  
  // useEffect(() => {
  //   // fetch(
  //   //   "https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=Danny%20Welbeck"
  //   // )
  //   //   .then(res => res.json())
  //   //   .then(data => {
  //   //     // console.log(data?.player);
  //   //     setPlayers(data?.player);
  //   //   }
  //   //   );
  //   console.log("Hi I am Ramisa");
  // }, [control]);
  // // console.log(players);
  // const handleEffect = () => {
  //   setControl(!control)
  // }
  // console.log(control);
  return (
    <div className="App">
        <Nav></Nav>
        <Home></Home>
      {/* <button onClick={handleEffect}>Check Effect</button> */}
    </div>
  );
}

export default App;
