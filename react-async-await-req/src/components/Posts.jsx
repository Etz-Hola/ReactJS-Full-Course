import axios from "../apis/jsonPH";
import useAxiosFunction from "../hooks/useAxiosFunction";
import { useEffect } from "react";


const Posts = () => {
    const [response, loading, error, axiosFetch] = useAxiosFunction();

    const getData = () => {

    }

  return (
    <div>Posts</div>
  )
}

export default Posts