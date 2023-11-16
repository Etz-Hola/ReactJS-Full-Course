import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import useRefreshToken from "../hooks/useRefreshToken"
import useAuth from "../hooks/useAuth"

const PersistLogin = () => {
    const [isLoadin, setIsLoadin] = useState(true)
    const refresh = useRefreshToken();
  return (
    <div>PersistLogin</div>
  )
}

export default PersistLogin