import React from 'react'
import {useState, useEffect} from 'react'
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import {ThemeProvider} from './context/ThemeContext.jsx';
import Signin from './routes/Signin';
import Home from './routes/Home';
import Signup from './routes/Signup';
import CoinPage from './routes/CoinPage.jsx';
import Footer from './components/Footer.jsx';
import Account from './routes/Account.jsx';
import axios from 'axios'
import {AuthContextProvider} from './context/AuthContext.jsx'

function App() {
  const[coins , setCoins]=useState([]);
  const url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=true'
  useEffect(() => {
    axios.get(url).then((response)=>{
      setCoins(response.data)
      console.log(response.data)
    }
    )
  },[url])
  return (
    <ThemeProvider>
      <AuthContextProvider>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home coins={coins}/>}/>
            <Route path='/signin' element={<Signin />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/account' element={<Account />}/>
            <Route path='/coin/:coinId' element={<CoinPage />}/>
            
            <Route path=":coinId"/>
        </Routes>
        <Footer/>
        </AuthContextProvider>

        
    </ThemeProvider>
  );
}
export default App;
