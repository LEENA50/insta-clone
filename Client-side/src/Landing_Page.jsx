import axios from 'axios';
import React from 'react'

import {Link} from "react-router-dom";



export default function LandingPage() {
  
   
  return (
    <div style={{display:"flex",flexDirection:"row,",alignItems:"center",justifyContent:"center",marginTop:"250px"}}>
            <div style={{width:"50%"}}>
                <img src="InstagramLogo.png"  alt="" />
            </div>
            <div style={{width:"50%"}}>
                <h1 style={{paddingLeft:"75px",fontFamily:"monospace",color:"orange"}}>Welcome to the Website</h1>

                <Link to="/post" style={{paddingLeft:"200px"}}>
                    <button style={{height:"50px",width:"100px",backgroundColor:"greenyellow",border:"1px solid greenyellow",color:"white",fontWeight:"bolder"}}>Click to Enter</button>
                </Link>
            </div>
            
    </div>
  )
}
