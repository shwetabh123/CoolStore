import {Button,Image,Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Card = ({amount,img,checkoutHandler}) => {
  return (
  <VStack>

    <Image src={ img} boxSize={"64"} objectFit="cover"/>
    <Text>Rs {amount}</Text>
    <Button on onClick={()=>checkoutHandler(amount)}>But Now</Button>
  </VStack>
  )
}

export default Card