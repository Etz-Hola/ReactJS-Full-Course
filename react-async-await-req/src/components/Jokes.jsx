import React from 'react'
import useAxios from '../hooks/useAxios'
import axios from '../apis/dadjokes'

const Jokes = () => {
    const  [joke, error, loading] = useAxios({
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
    <article></article>
  )
}

export default Jokes