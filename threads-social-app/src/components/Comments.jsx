import { Avatar, Flex, Text } from "@chakra-ui/react"
import React, { useState } from "react"
import { BsThreeDots } from "react-icons/bs"
import Actions from "./Actions"

const Comments = ({comment, createdAt, likes, username, userAvater}) => {
    const [liked, setLiked] = useState(false)
  return (
    <React.Fragment>
        <Flex gap={4} my={2} w={"full"}>
            <Avatar 
                src="https://bit.ly/ryan-florence"
                size={"sm"}
                name= "Ryan Florence"             
            />

            <Flex flexDirection={"column"} gap={1} w={"full"}>

                <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
                    <Text fontSize={"sm"} fontWeight={"bold"} >JohnDoe</Text>

                    <Flex gap={2} alignItems={"center"}>
                        <Text fontSize={"sm"} color={"gray.light"}>2 min age</Text>
                        <BsThreeDots />
                    </Flex>
                </Flex>
                <Text>{comment}</Text>

                <Actions liked={liked} setLiked={setLiked}/>

                <Text>{12 + (liked ? 1 : 0)}likes</Text>

            </Flex>
        </Flex>
    </React.Fragment>
  )
}

export default Comments