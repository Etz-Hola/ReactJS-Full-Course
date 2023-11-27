import { Avatar, Flex, Text } from "@chakra-ui/react"
import React from "react"
import { BsThreeDots } from "react-icons/bs"

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

                <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
                    <Text fontSize={"sm"} fontWeight={"bold"} >JohnDoe</Text>

                    <Flex gap={2} alignItems={"center"}>
                        <Text fontSize={"sm"} color={"gray.light"}>2 min age</Text>
                        <BsThreeDots />
                    </Flex>
                </Flex>

            </Flex>
        </Flex>
    </React.Fragment>
  )
}

export default Comments