import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/userAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";


const Users = () => {
    const [users, setUsers] = useState()
    const axiosPrivate = useAxiosPrivate()

    const navigate = useNavigate()
    const location = useLocation()


    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController()

        const getUsers = async () => {

            try {
                const response = await axiosPrivate.get('/users', {
                    signal: controller.signal
                })
                console.log(response.data)
                isMounted && setUsers(response.data)
                
            } catch (error) {
                console.error(error)  
                navigate('/login', {state: {from : location}, replace: true})              
            }
        }
        getUsers()
        return () => {
            isMounted = false;
            controller.abort()
        }

hmlhbb  m




    }, [])

  return (
    <article>
        <h2>Users List</h2>
        {users?.length
            ? (
                <ul>
                    {users.map((user, i) => <li key={i}>{user?.
                        username}</li>)}
                </ul>
            ) : <p>No user to display</p>
        }
        {/* <button onClick={() => refresh()}>Refresh</button> */}
        <br />
    </article>
  )
}

export default Users