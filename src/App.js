import React from 'react';
import Navbar from './components/navBar/Navbar'
import './App.css'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import { action, orginals } from './components/urls'; 

function App() {
  return (
    <div className="App">
        <Navbar />
        <Banner />
        <RowPost url={orginals} title='Netflix Orginals'  />
        <RowPost url={action} title='Action' isSmall  />
    </div>
  
  );
}

export default App;
