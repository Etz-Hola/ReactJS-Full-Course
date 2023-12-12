import { Avatar, Box, Button, Divider, Flex, Image, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../components/Actions";
import Comments from "../components/Comments";

const PostPage = () => {
  const [liked, setLiked] = useState(false)

  return (
    <>
      <Flex
        w={"full"}
        gap={3}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Flex alignItems={"center"}>
          <Avatar src="/aliumusa.jpeg" name="Aliu Musa" size={"md"} mr={2} />
          <Text fontSize={"sm"}>Aliu Musa</Text>
          <Image src="/verified.png" h={4} w={4} ml={2} />
        </Flex>

        <Flex gap={4} alignItems={"center"}>
          <Text
            fontSize={{ base: "xs", md: "sm" }}
            textAlign={"right"}
            w={36}
            color={"gray.light"}
          >
          2day
          </Text>
          <Menu>
            <MenuButton>
              <BsThreeDots cursor={'pointer'} />
            </MenuButton>
            <MenuList>
              <MenuGroup>
                <MenuItem color={'gray.light'}>Mute</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup>
                <MenuItem color={'red'}>Block</MenuItem>
                <MenuItem color={'gray.light'}>Hide</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup>
                <MenuItem color={'red'}>Report</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      <Text my={3}>Hello gbogbo ile!!!</Text>


      <Box
        overflow={"hidden"}
        borderRadius={"6"}
        border={"1px solid"}
        borderColor={"gray.light"}>
        <Image src="/post1.png" width={"full"} />
      </Box>

      <Flex>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>

      <Flex gap={2} color={"gray.light"} fontSize={"sm"} alignItems={"center"}>
        <Text>200 replies</Text>
        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
        <Text>{29 + (liked ? 1 : 0)} likes</Text>
      </Flex>

      <Divider my={4} />

      <Flex justifyContent={"space-between"}>
        <Flex alignItems={"center"} gap={"2"}>
          <Text fontSize={"2xl"}>👋</Text>
          <Text color={"gray.light"}>Get the app to like, reply and post.</Text>
        </Flex>
        <Button>Get</Button>

      </Flex>

      <Divider my={4} />
      <Comments username={"Ryan florence"} userAvater={"https://bit.ly/ryan-florence"} comment={"Yoo! how far"} likes={12} createdAt={"2 min ago"} />
      <Comments username={"Dave Rocco"} userAvater={"https://bit.ly/ryan-florence"} comment={"Yoo! how far"} likes={12} createdAt={"3 hr ago"} />
      <Comments username={"Shola Ola"} userAvater={"https://bit.ly/ryan-florence"} comment={"Yoo! how far"} likes={12} createdAt={"1 day ago"} />
    </>
  );
};
//////////////////////////////////////////

export default PostPage;
