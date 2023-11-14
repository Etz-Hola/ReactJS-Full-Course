import React from 'react'
import { Link } from 'react-router-dom'

const LinkPage = () => {
  return (
    <section>
        <h1>Links</h1>
        <br />
        <h2>Publicc</h2>
        <Link to='/login'></Link>
        {/* <Link to='/register'>Register</Link> */}

        <h2>Private</h2>
        <Link tp='/'>Home</Link>
        <Link tp='/editor'>Editors Page</Link>
        <Link tp='/admin'>Admin Page</Link>

    </section>
  )
}

export default LinkPage