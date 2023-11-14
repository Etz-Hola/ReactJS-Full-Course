import { useRef, useState, useEffect } from "react";
import AuthContext from "./context/AuthProvider";


const Login = () => {
    


    const userRef = useRef()
    const errRef = useRef()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [username, password])


    const handleSubmit = async (e) => {
        e.preventDefault()     
          console.log(username, password);
          setSuccess(true);
          setUsername('');
          setPassword('');
      }


  return (
    <>
    {success ? (
      <section>
        <h1>Success</h1>
        <p>
          <a href="/">Sign In</a>
        </p>
      </section>
    ) : (
    <section>
        <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive" >
            {errMsg}
        </p>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Username:
            </label>
            <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
            />
            <label>
                Password:
            </label>
            <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
            />
            <button>Sign In</button>
            
        </form>
        <p>
            Need an account? <br/>
            <span className="line">
                <a href="#"> Sign Up</a>
            </span>
            
             
        </p>
    </section>
    )}
    </>
  )
}

export default Login