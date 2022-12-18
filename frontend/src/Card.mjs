import {Button,Image,Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Card = ({amount,img,checkoutHandler}) => {
  return (
  <VStack>

    <Image src={ img} boxSize={"500"} objectFit="cover"/>
 
    <Text>Price : Rs {amount}</Text>
    <Button on onClick={()=>checkoutHandler(amount)}>But Now</Button>
  </VStack>
  )
}

export default Card