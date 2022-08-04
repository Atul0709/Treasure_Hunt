// import logo from './logo.svg';
import './App.css';
import './style.css';
import Header from './Component/Header/Header'
import Footer from './Component/Header/Footer'
// import Home from './Component/MainComponent/Home'
import Treasure_hunt from './Component/MainComponent/Treasure_hunt'
import Quizzard from './Component/MainComponent/Quizzard'
import Register from './Component/Header/Register'
// import Games from './Component/MainComponent/Games';
// import Rewards from './Component/MainComponent/Rewards';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
       <BrowserRouter>
       <Header />
          <Routes>
               {/* <Route path='/' element = {<Home />} /> */}
               <Route path='/Treasure_hunt' element = {<Treasure_hunt />} />             
               <Route path='/Quizzard' element = {<Quizzard />} />
               <Route path='/Register' element ={<Register/>}/>
               {/* <Route path='/Schedule' element ={<Schedule/>}/>
               <Route path='/Rewards' element ={<Rewards/>}/> */}

          </Routes>
       
       <Footer />
       </BrowserRouter>
  );
}

export default App;
