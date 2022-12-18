import { Link } from 'react-router-dom'
import React from 'react'
import { Box, Stack ,Text} from "@chakra-ui/react"
import Card from './Card.mjs'
import axios from "axios";
import "./styles/MobilePhone.css"
import data from "./Template.json";
import  {useState} from 'react';

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>


const LaptopTablet = () => {
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
    const sampleJSON = [
   

    ]  

    const [searchTerm, setSearchTerm] = useState("");
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
      
    
       {/* <div className='searchbox'>
         <input type="text" name="search" placeholder="Search Products"/>{searchIcon}

        </div> */}

        </div>
           
         <Box>

            <Stack h={"100vh"} alignItems="normal" flexDirection="row" justifyContent="center" direction={["column", "row"]}>
            <Text>Description:Apple</Text>
            <Card amount={1} img={"https://m.media-amazon.com/images/I/314J9pAsXyL._SY450_.jpg"}checkoutHandler={checkoutHandler}/>
       

       
            </Stack>

        </Box>
         
         
  

        <div className="templateContainer">

  <div className="searchbox">
    <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
      setSearchTerm(event.target.value);
    }} />{searchIcon}
  </div>





  <div className="template_Container">
    {

sampleJSON.filter((val) => {
          if(searchTerm == ""){
            return val;
          }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return val;
          }
        })
        .map((val) => {
          return(
            <div className="template" key={val.id}>
                <img src={val.image} alt="" />
                <h3>{val.title}</h3>
                <p className="price">${val.price}</p>
            </div> 
          )
        })
    }
  </div>

</div>

    </>
       
        
    )
}

export default LaptopTablet