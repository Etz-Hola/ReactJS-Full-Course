import { Button, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useShowToast from '../hooks/useShowToast'

const HomePage = () => {
  const showToast = useShowToast()
  const [loading, setLoading] = useState(true)

  useEffect(() => {    
    const getFeedPosts = async () => {
      setLoading(true);
      
      try {
        const res = await fetch("/api/posts/feed")
      } catch (err) {
        console.log(err)
        showToast("Error", err.message, "error");
      }finally {
        setLoading(false);
      }
    };


    getFeedPosts();
  }, [showToast])
  


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