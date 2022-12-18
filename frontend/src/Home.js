import React from 'react'
// import { Box, Stack } from "@chakra-ui/react"
// import Card from './Card.mjs'
//import axios from "axios";
import { Link } from 'react-router-dom'
import "./styles/MobilePhone.css"
import data from "./Template.json";
import  {useState} from 'react';

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>

const Home = () => {


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
       <Link className="navlinks" to="WomenFashion" >Women's Fashion</Link><span> |  </span>

       <div className='searchbox'>

         <input type="text" name="search" placeholder="Search Products..."/>{searchIcon}

        </div>

       </div>



       <div className='logo'>

       <Link to='/Home'>
        < img id="logoImage"  width="1000" height="600"  justifyContent="center"  src="https://www.foodnavigator-asia.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-asia.com/headlines/markets/can-unmanned-convenience-stores-take-off-in-indonesia-jd.com-thinks-so/8506049-1-eng-GB/Can-unmanned-convenience-stores-take-off-in-Indonesia-JD.com-thinks-so.jpg" alt="Not"/>
      </Link>

      </div>

      
   
</>

    )
}

export default Home