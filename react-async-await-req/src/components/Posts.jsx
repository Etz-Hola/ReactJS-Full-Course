import axios from "../apis/jsonPH";
import useAxiosFunction from "../hooks/useAxiosFunction";
import { useEffect } from "react";


const Posts = () => {
    const [response, loading, error, axiosFetch] = useAxiosFunction();

    const getData = () => {
        axiosFetch({
            axiosInstance : axios,
            url: "/posts",
            method: 'GET',
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const handleSubmit = () => {
        axiosFetch({
            axiosInstance : axios,
            url: "/posts",
            method: 'post',
            
        })
    }

  return (
    <div>Posts</div>
  )
}

export default Posts