import { axiosPrivate } from "../api/axios"
import { useEffect } from "react"
import useRefreshToken from "./useRefreshToken"
import useAuth from "./useAuth"


const userAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const {auth} = useAuth()

    useEffect(() => {
        const requestIntercep = axiosPrivate.interceptors.request.use((config) => {
            config.headers['Authorization'] = `Bearer ${auth?.accessToken}`
        })

    }, [auth, refresh])
  return axiosPrivate
}

export default userAxiosPrivate