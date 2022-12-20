import { Link } from 'react-router-dom'
import React from 'react'
import { Box, Stack } from "@chakra-ui/react"
import Card from './Card.mjs'
import axios from "axios";
import "./styles/MobilePhone.css"
import Refrigeratordata from "./Refrigeratordata.js";
import  {useState} from 'react';

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>


const Refrigerator = () => {

    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("http://www.localhost:3001/api/getkey")

        const { data: { order } } = await axios.post("http://localhost:3001/api/checkout", {
            amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "CoolStore",
            description: "CoolStore",
            image: "https://avatars.githubusercontent.com/u/25058652?v=4",
            order_id: order.id,
            callback_url: "http://localhost:3001/api/paymentverification",
            prefill: {
                name: "Shwetabh Srivastava",
                email: "gaurav.kumar@example.com",
                contact: "7019048203"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }
    const[filter,setFilter]=useState('');
const searchText=(event)=>{
  setFilter(event.target.value);

}

let datasearch=Refrigeratordata.cardData.filter(item=>{
return Object.keys(item).some(key=>

  item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
  )

});
    return (

        <>
         
         <div className="nav">
         <Link className="navlinks" to="/Home" >Home</Link><span> |  </span>
       <Link className="navlinks" to="/MobilePhone" >Mobile Phone</Link><span> |  </span>
       <Link className="navlinks" to="/LaptopTablet" >Laptop Tablet</Link><span> |  </span>
       <Link  className="navlinks" to="/Refrigerator" >Refrigerator</Link><span> |  </span>
       <Link  className="navlinks" to="/AppliancesElectronics" >TV, Appliances, Electronics</Link><span> |  </span>
       <Link className="navlinks" to="/MenFashion" >Men's Fashion</Link><span> |  </span>
       <Link className="navlinks" to="/WomenFashion" >Women's Fashion</Link><span> |  </span>
      
       <div className='searchbox' align="right" >
      <input type="text" name="search" placeholder="Search Products..." value={filter} onChange={searchText.bind(this)}/>{searchIcon}

     </div>

     </div>
    
         
<div className="searchclass">
 

 {datasearch.map((item,index)=>{
return(
<div className='kk'>
 {/* <img src={item.image} className='test' /> */}

 <Card amount={item.Price} img={item.image}checkoutHandler={checkoutHandler}/>
      
<h5 className='card-title'align="center">{item.title} </h5>
<h5 className='card-text'align="center">Description : {item.desc}</h5>
   </div>
 
  
)

 })}

       
</div>  


        {/* <Box>

            <Stack h={"30vh"} alignItems="normal"  flexDirection="row" justifyContent="center" direction={["column", "row"]}>

            <Card  amount={1} img={"https://m.media-amazon.com/images/I/51nTyZ+ZLfL._SL1200_.jpg"}checkoutHandler={checkoutHandler}/>
        
            </Stack>
            
        </Box> */}

    </>
       
        
    )
}

export default Refrigerator