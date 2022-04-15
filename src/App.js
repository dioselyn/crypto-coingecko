import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import TableCoins from './components/TableCoins';


function App() {

  const [coins, setCoins] = useState([]);

  const getData = async () => {
  const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1");
  console.log(res.data); 
  setCoins(res.data);
}
 
  useEffect(() => { //El useEffect hace que la funcion getData se actualice cada vez que
  getData()         //el state cambia
  }, []);
 

  return (
    <div className="App">
     <h1>Coin Market</h1>
     <TableCoins coins={coins}></TableCoins>
    </div>
  );
}

export default App;
