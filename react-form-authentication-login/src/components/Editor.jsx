import React from 'react'
import { Link } from 'react-router-dom'

const Editor = () => {
  return (
    <section>
        <h1>Editor's Page</h1>
        <br />
        <p>You must have been assigned an Admin Role</p>

        <div className='flexGrow'>
            <Link to='/'>Home</Link>
        </div>
    </section>
  )
}

export default Editor