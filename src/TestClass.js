import axios from 'axios';
import React from 'react'


class App extends React.Component {
 
  constructor(){
    super();
    this.state={title:"",brand:"",img:""}
  }

  componentDidMount() {
    this.getData(1);
  }     

 
  async getData(random){
      const res = await axios.get(`https://dummyjson.com/products/${random}`)
      this.setState({title:res.data.title,brand:res.data.brand,img:res.data.images[0]})
  }

   changeData(){
    const rId = Math.floor(Math.random() * 30);
    this.getData(rId);
   }

   
   render() {
     

    return(
    <>
    <div style={{
      textAlign:"center",
      border:"4px solid white",
      borderRadius:"8%",
      width:"600px",
      margin:"0px  auto",
      marginTop:"20px",
      paddingBottom:"20px",
      background:"#3B71CA"
   }}>
     <h2 
     style={{
    fontSize:"40px",
    color:"white"
   }}>CLASS BASED</h2>
    {
        this.state.title?<><h2 style={{color: "burlywood"}}>TITLE : <span style={{color:"black"}}>{this.state.title}</span></h2><h2 style={{color: "burlywood"}}>BRAND : <span style={{color:"black"}}>{this.state.brand}</span></h2></>:<h2>NO DATA</h2>
    }
    <img style={{
      borderRadius:"12%"
    }}src={this.state.img} alt="no img" width="450px" height="300px"></img>
    
    <button
    style={{
      background: "#3B71CA",
      color: "white",
      fontSize: "18px",
      fontWeight: "bold",
      padding: "12px 14px",
      marginTop:"10px",
      borderRadius: "20px"
       }}
        onClick={()=>this.changeData()}>NEXT PRODUCT</button>
    </div>
    </>
    );
  }
}

export default App;