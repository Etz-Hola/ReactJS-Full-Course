import { useEffect, useState } from 'react'
import UserHeader from "../components/UserHeader"
import UserPosts from "../components/UserPosts"
import { useParams } from 'react-router-dom';
import useShowToast from '../hooks/useShowToast';

const UserPage = () => {
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const showToast = useShowToast()


  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${username}`)
        const data = await res.json()
        
        if (data.error) {
          showToast("Error", data.error, "error")
          return;
        }
        setUser(data)

      } catch (error) {
        showToast("Error", error, "error")
      }      
    }
    getUser()
  
  }, [username, showToast])

  if(!user) return null
  

  return (
    <>
      <UserHeader user={user} />

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