import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section>
    <h1>Home Page</h1>
    <br />
    <p>You're logged in</p>
    <br />
    <Link to='/editor'>Go to Editor Page</Link>
    <br />
    <Link to='/admin'>Go to Admin Page</Link>
    <br />
    <Link to='/lounge'>Go to the Lounge</Link>
    <br />
    <Link to='/limkpage'>Go to the Link Page</Link>

    <div className='flexGrow'>
        <button>Sign Out</button>
    </div>
</section>
  )
}

export default Home