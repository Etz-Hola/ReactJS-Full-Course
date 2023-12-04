import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
        <Link to={"/markzuckerberg"}>
            <Flex w={"full"} justifyContent={"center"}>
                <Button w={""} mx={"auto"}>Visit Profile Page</Button>
            </Flex>
        </Link>
    </>
  )
}
 
export default HomePage