import { useEffect, useState } from 'react'
import UserHeader from "../components/UserHeader"
import UserPosts from "../components/UserPosts"
import { useParams } from 'react-router-dom';

const UserPage = () => {
  const [user, setUser] = useState(null);
  const { username } = useParams();


  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`api/users/profile/${username}`)
        const data = await res.json()
        console.log(data)

      } catch (error) {
        console.log(error)
      }      
    }
    getUser()
  
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