import React from 'react'
import { Box, Stack } from "@chakra-ui/react"
import Card from './Card'
import axios from "axios";


const Home = () => {


    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("http://www.localhost:3000/api/getkey")

        const { data: { order } } = await axios.post("http://localhost:3000/api/checkout", {
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
            callback_url: "http://localhost:3000/api/paymentverification",
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

    return (
        <>
        <Box>

            <Stack h={"50vh"} alignItems="normal" flexDirection="row" justifyContent="center" direction={["column", "row"]}>

            <Card amount={1} img={"https://images.livemint.com/img/2022/01/21/1600x900/FILES-US-INTERNET-RETAIL-AMAZON-1_1642737121303_1642737156955.jpg"}checkoutHandler={checkoutHandler}/>
    <Card amount={1} img={"http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"} checkoutHandler={checkoutHandler} />
    <Card amount={2} img={" https://m.media-amazon.com/images/I/71L-lTQnJiL._SL1500_.jpg"} checkoutHandler={checkoutHandler} />
    <Card amount={2} img={" https://m.media-amazon.com/images/I/61-r9zOKBCL._SL1500_.jpg"} checkoutHandler={checkoutHandler} />
    <Card amount={1} img={" https://m.media-amazon.com/images/I/61qkivZWR9L._SL1500_.jpg"} checkoutHandler={checkoutHandler} />
    <Card amount={1} img={" https://m.media-amazon.com/images/I/71YPzkeoRzL._SL1500_.jpg"} checkoutHandler={checkoutHandler} />
    <Card amount={1} img={" https://m.media-amazon.com/images/I/51HEXNL9nPL.jpg"} checkoutHandler={checkoutHandler} />
    <Card amount={1} img={" https://m.media-amazon.com/images/I/51HEXNL9nPL.jpg"} checkoutHandler={checkoutHandler} />
    <Card amount={1} img={" https://m.media-amazon.com/images/I/81FRDnmo-+L._SL1500_.jpg"} checkoutHandler={checkoutHandler} />
    <Card amount={1} img={" https://m.media-amazon.com/images/I/61TzTAGwmRL._SL1000_.jpg"} checkoutHandler={checkoutHandler} />
    <Card amount={1} img={"https://m.media-amazon.com/images/I/71IWpC2j2kL._SL1500_.jpg"} checkoutHandler={checkoutHandler} /> 
    
            </Stack>
            
        </Box>
      
     </>
    )
}

export default Home