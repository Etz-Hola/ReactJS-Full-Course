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
            requestConfig: {
                data: {
                    userId: 10,
                    title: "Adeshola",
                    body: "Boda oni chicken..",
                }
            }
        })
    }

  return (
    <article>
        <h2>Posts</h2>

        {loading && <p>loading...</p>}
        {!loading && error && <p className='errMsg'>{error}</p>}
        {!loading && !error && joke && <p>{joke?.joke}</p>}
        {!loading && !error && !joke && <p>No Joke to display! 😜</p>}

    </article>
  );
};

export default Posts