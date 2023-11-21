import axios from "../apis/jsonPH";
import useAxiosFunction from "../hooks/useAxiosFunction";
import { useEffect } from "react";


const Posts = () => {
    const [posts, loading, error, axiosFetch] = useAxiosFunction();

    const getData = () => {
        axiosFetch({
            axiosInstance: axios,
            url: "/posts",
            method: 'GET',
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const handleSubmit = () => {
        axiosFetch({
            axiosInstance: axios,
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
            <div className="row">
                <button onClick={() => handleSubmit()}>Submit</button>
            </div>

            {loading && <p>loading...</p>}
            {!loading && error && <p className='errMsg'>{error}</p>}
            {!loading && !error && posts?.length &&
                <ul>  d
                    {posts.map((post, i) => (
                            <li key={i}>{post.id}. {post.title}</li>
                        ))}
                </ul>}
            {!loading && !error && posts?.data && 
                <p>
                    userId: { posts.data.userId} title: {posts.data.title} body: {posts.data.body}
                </p>
            }
            {!loading && !error && !posts && <p>No Post to display! 😜</p>}

        </article>
    ); 
};

export default Posts