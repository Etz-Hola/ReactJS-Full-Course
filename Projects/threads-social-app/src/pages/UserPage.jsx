import { useEffect, useState } from 'react'
import UserHeader from "../components/UserHeader"
import UserPosts from "../components/UserPosts"

const UserPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        
      } catch (error) {
        console.log(error)
      }      
    }
  
  }, [username])
  


  return (
    <>
      <UserHeader/>

      <UserPosts 
      likes={10}
      replies={20}
      postImg={"/post1.png"}
      postTitle={"hello, i dont know why tutor is like this today."}
      /> 

      <UserPosts 
      likes={3}
      replies={1}
      postImg={""}
      postTitle={"Let get to work."}
      /> 

      <UserPosts 
       likes={200}
       replies={50}
       postImg={"/post3.png"}
       postTitle={"hello, wjay up."}
      /> 
    </>
  )
}

export default UserPage