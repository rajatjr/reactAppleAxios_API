import React, { useState } from 'react';
import Test from './Test';
import TestClass from './TestClass';


function App() {
 
  const [ activeIndex,setIndex ]= useState(0);

  const nextSlide = ()=> {
    setIndex(activeIndex);
    if (activeIndex === 1) {
      setIndex(0);
    } else {
      setIndex(1);
    }
  }

  let activeComponent;

  if (activeIndex === 0) {
    activeComponent = <Test/>;
  } else if (activeIndex === 1) {
    activeComponent = <TestClass/>;
  }

  return (
    <>
    
    <div style={{
      display:"flex",
      flexDirection:"row"
      }}>
    <h2 style={{
      height:"50px",
      margin:"auto 0",
      marginLeft:"50px"
    }}>
      <button style={
      {
        background: "#3B71CA",
        color: "white",
        fontWeight: "bold",
        borderRadius: "20px",
        padding:"10px 14px",
        fontSize:"20px",
      }
    } onClick={()=>nextSlide()}> &lt;</button>
    </h2>
    {activeComponent}
    <h2 style={{
      height:"50px",
      margin:"auto 0",
      marginRight:"50px"
    }}>
      
      <button style={
      {
        background: "#3B71CA",
        color: "white",
        fontWeight: "bold",
        borderRadius: "20px",
        padding:"10px 14px",
        fontSize:"20px",
        
      }
    } onClick={()=>nextSlide()}>&gt;</button>
    </h2>
    </div>
 
    </>
  )
}

export default App