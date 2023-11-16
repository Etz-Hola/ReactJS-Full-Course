import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import useRefreshToken from "../hooks/useRefreshToken"
import useAuth from "../hooks/useAuth"

const PersistLogin = () => {
    const [isLoadin, setIsLoadin] = useState(true)
    const refresh = useRefreshToken();

    const { auth } = useAuth();

    useEffect(() => {
        let isMounted = true
        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoadin(false)
            }
        }
        !auth?.accessToken ? verifyRefreshToken() : setIsLoadin(false)
    })


  return (
    <div>PersistLogin</div>
  )
}

export default PersistLogin