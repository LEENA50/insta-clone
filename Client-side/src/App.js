// import logo from './logo.svg';
import React from 'react';
import './App.css';
import LandingPage from './Landing_Page';
// import Panding_Page from './Landing_Page';
import PostView from './postView';
import {Link, Route,Routes} from "react-router-dom";
// import Addpost from './addpost';
import Post from './addpost';


function App() {
  return (
    
    <div>
      <nav className='Nav-bar'>
        <img src="mainLogo.png" alt="" className='logo' />
        <Link to="/newpost"><i className ="fa-solid fa-camera camera" style={{marginLeft:"550px"}} ></i></Link>

        </nav>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/post' element={<PostView/>}/>
        <Route path='/newpost' element={<Post/>}/>
      </Routes>
      
    </div>
   
    
  )
}
export default App;
