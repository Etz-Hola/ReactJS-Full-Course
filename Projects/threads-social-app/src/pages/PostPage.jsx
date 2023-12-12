import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Actions from "../components/Actions";
import Comments from "../components/Comments";
import useGetUserProfile from "../hooks/useGetUserProfile";
import useShowToast from "../hooks/useShowToast";
import { DeleteIcon } from "@chakra-ui/icons";
import { useRecoilState, useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import { formatDistanceToNow } from "date-fns";
import postsAtom from "../atoms/postsAtom";

const PostPage = () => {
  const { user, loading } = useGetUserProfile();
  const [posts, setPosts] = useRecoilState(postsAtom);
  const [post, setPost] = useState(null);
  const showToast = useShowToast();
  const { pid } = useParams();
  const currentUser = useRecoilValue(userAtom);
  const navigate = useNavigate();

  const currentPost = posts[0]
  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await fetch(`/api/posts/${pid}`);
        const data = await res.json();

        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        console.log(data);
        setPosts([data]);
      } catch (error) {
        showToast("Error", error.message, "error");
      }
    };
    getPost();
  }, [showToast, pid, setPosts]);

  const handleDeletePost = async () => {
    try {
      if (!window.confirm("Are you sure you want to delete this post")) return;
      const res = await fetch(`/api/posts/${currentPost._id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.error) {
        showToast("Error", data.error, "error");
        return;
      }

      showToast("Success", "Post deleted successfully", "success");

      navigate(`/${user.username}`);
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  if (!user && loading) {
    return (
      <Flex justifyContent={"center"}>
        <Spinner size={"xl"} />
      </Flex>
    );
  }

  if (!currentPost) return null;

  return (
    <>
      <Flex
        w={"full"}
        gap={3}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Flex alignItems={"center"}>
          <Avatar src={user.profilePic} name="Aliu Musa" size={"md"} mr={2} />
          <Text fontSize={"sm"}>{user.username}</Text>
          <Image src="/verified.png" h={4} w={4} ml={2} />
        </Flex>

        <Flex alignItems={"center"} gap={4} onClick={(e) => e.preventDefault()}>
          <Text fontSize={"xs"} width={36} textAlign={"right"}>
            {formatDistanceToNow(new Date(currentPost.createdAt))} ago
          </Text>
          {currentUser?._id === user._id && (
            <DeleteIcon size={20} onClick={handleDeletePost} />
          )}
        </Flex>
      </Flex>

      <Text my={3}>{currentPost.text}</Text>

      {currentPost.img && (
        <Box
          overflow={"hidden"}
          borderRadius={"6"}
          border={"1px solid"}
          borderColor={"gray.light"}
        >
          <Image src={currentPost.img} width={"full"} />
        </Box>
      )}

      <Flex>
        <Actions post={currentPost} />
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

      <Divider my={4} />
        {currentPost.replies.map(reply => (
          <Comments
          key={reply._id}
          reply={reply}
          lastReply = {reply._id === currentPost.replies[currentPost.replies.length -1]._id }
          />
        ))}

    </>
  );
};

//////////////

export default PostPage;
