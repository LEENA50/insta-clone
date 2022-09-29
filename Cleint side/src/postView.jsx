import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';


export default function PostView() {
    const[postData,setPostData] = useState([]);
    useEffect(()=>{
        fetch("https://intsagram-by-abhishek.herokuapp.com/postview").then((data)=>
        {
            return data.json();
        }).then((data)=>{
            setPostData(data);
            console.log(data)
        })
    },[])
    const IMG_URL = "https://intsagram-by-abhishek.herokuapp.com";
  return (
    
    <div className='main-div'>
        
        {
            postData.map((key)=>{
                
                return (
                    
                    
                    <div className='Post-Div'>
                                
                        <section className='sec-1'>
                            <div className='name-and-location'>
                                <div style = {{fontWeight:"bolder",marginBottom:"0px"}}>{key.name}</div>
                                <div style={{fontSize:"15px",color:"grey",marginTop:"0px"}}>{key.location}</div>
                               
                            </div>
                            <i className="fa-solid fa-ellipsis ellipse"></i>
                        </section>
                        <section>
                            {console.log(key.image)}
                            <img src={`${IMG_URL}${key.image}`} alt="" />
                        </section>
                        <section>
                            <div className='icons-and-dates'>
                            <div className='icons-and-likes' style={{marginLeft:"10px"}}>
                            <div>
                            <i class="fa-solid fa-heart" style={{fontSize:"22px"}}></i>
                            <i class="fa-solid fa-location-arrow" style={{fontSize:"22px",marginLeft:"15px"}}></i>
                            </div>
                            <div>
                                <p style={{fontSize:"15px",color:"gray",marginTop:"4px"}}>{key.likes}</p>
                            </div>
                            </div>
                            <div style={{marginLeft:"auto",marginRight:"15px",marginBottom:"55px",fontSize:"15px",color:"gray"}}>{key.date}</div>
                            </div>
                            <div>
                                <h4 style={{marginLeft:"10px",marginTop:"0px"}}>{key.description}</h4>
                            </div>
                        </section>
                    </div>
                )
            })
        }
    </div>
  )
}
