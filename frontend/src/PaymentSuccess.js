import { Box, Heading, VStack ,Text} from '@chakra-ui/react'
import React from 'react'
import {useSearchParams } from "react-router-dom"

const PaymentSuccess = () => {

    const searchQuery=useSearchParams()[0]
    console.log(searchQuery.get("reference"))
    const referenceNum=searchQuery.get("reference")

  return (
   
   
   <Box>
    <VStack h="100vh" justifyContent={"center"}>
        <Heading textTransform={"uppercase"}> Order successfull</Heading>
   <Text>
     ReferenceNum .{referenceNum}

    </Text>

    </VStack>
   </Box>
   
    )
}

export default PaymentSuccess