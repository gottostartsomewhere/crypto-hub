import React from 'react'
import Trending from '../components/Trending.jsx'
import CoinSearch from '../components/CoinSearch.jsx';
const Home = ({coins}) => {
  return (
    <div><CoinSearch coins={coins} /> 
    <Trending/>
    </div>
  )
}

export default Home;