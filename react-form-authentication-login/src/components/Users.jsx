import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/userAxiosPrivate";


const Users = () => {
    const [users, setUsers] = useState()
    const axiosPrivate = useAxiosPrivate()

nnnoajkiki
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
            }
        }
        getUsers()
        return () => {
            isMounted = false;
            controller.abort()
        }


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