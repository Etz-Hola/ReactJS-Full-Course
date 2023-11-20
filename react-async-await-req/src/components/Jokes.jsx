import React from 'react'
import useAxios from '../hooks/useAxios'
import axios from '../apis/dadjokes'

const Jokes = () => {
    const  [joke, loading, error] = useAxios({
        axiosInstance : axios,
        method: 'GET',
        url: '/',
        requestConfig: {
            Headers: {
                'Content-Language': 'en-US',
            }
        }
    })
  return (
    <article>
        <h2>Random Dad Jokes.</h2>

        {loading && <p>loading...</p>}

        {!loading && error && <p className='errMsg'>{error}</p>}

        {!loading && !error && joke && <p>{joke?.joke}</p>}

        {!loading && !error && !joke && <p>No Joke to display! 😜</p>}
    </article>
  )
}

export default Jokes