import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Test = () => {

    const [data,setData]=useState();
    useEffect(()=>{
        getUser(1);
    },[])

    async function getUser(randomId){
        try {
          const response = await axios.get(`https://dummyjson.com/products/${randomId}`);
          // console.log(response.data.images[0]);
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    const ChangeProduct=()=>{
        const randomId =  Math.floor(Math.random() * 30);
        getUser(randomId);
    }  
  return (
   <>
   <div style={{
    textAlign:"center",
    border:"4px solid white",
    borderRadius:"8%",
    width:"600px",
    margin:"0px auto",
    marginTop:"20px",
    paddingBottom:"20px",
    background:"#3B71CA"
   }}>

   <h2 style={{
    fontSize:"40px",
    color:"white"
   }}>FUNCTION BASED</h2>
   {data?<><h2 style={{color: "burlywood"}}>TITLE : <span style={{color:"black"}}>{data.title}</span></h2><h2 style={{color: "burlywood"}}> BRAND : <span style={{color:"black"}}>{data.brand}</span></h2></>:<h2>NO RECORDS FOUND</h2>}
   <img style={{
    borderRadius:"12%"
   }}
   src={data?.images[0]} alt="no img" width="500px" height="300px"></img>
  
   <button style={{
    background: "#3B71CA",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    padding: "12px 14px",
    marginTop:"10px",
    borderRadius: "20px"
   }} onClick={ChangeProduct}>NEXT PRODUCT</button>
   </div>
   </>
  )
}

export default Test