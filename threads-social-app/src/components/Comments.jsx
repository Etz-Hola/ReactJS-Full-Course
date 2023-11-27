import { Avatar, Flex } from "@chakra-ui/react"
import React from "react"

const Comments = ({comment, createdAt, likes, username, userAvater}) => {
  return (
    <React.Fragment>
        <Flex gap={4} my={2} w={"full"}>
            <Avatar 
                src="https://bit.ly/ryan-florence"
                size={"sm"}
                name= "Ryan Florence"             
            />

            <Flex flexDirection={"column"} gap={1} w={"full"} border={"2px solid white"}>
                
                <Flex justifyContent={"space-between"} alignItems={"center"}></Flex>

            </Flex>
        </Flex>
    </React.Fragment>
  )
}

export default Comments