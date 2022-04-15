import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import TableCoins from './components/TableCoins';


function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const getData = async () => {
  const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1");
  //console.log(res.data); 
  setCoins(res.data);
}
 
  useEffect(() => { //El useEffect hace que la funcion getData se actualice cada vez que
  getData()         //se renderiza
  }, []);
 

  return (
    <React.Fragment>
    <div className="container">
      <div className="row">
      <h1 className="text-center mt-4">API Crypto Coingecko</h1>
      <input type="search" placeholder='Search a Coin' className='form-control bg-dark text-align border-0 mt-4 text-center text-white' onChange={(event) => setSearch(event.target.value)} ></input>
      <TableCoins coins={coins} search={search}/>
      </div>
    </div>
    <footer>
    <p className='text-center text-muted'>Powered By <a href="https://github.com/dioselyn" className="text-decoration-none" target="_blank" rel='noreferrer'>Dioselyn Colina</a></p></footer>
    </React.Fragment> 
  );
}

export default App;
