import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "./context/AuthProvider";
import axios from "./api/axios";


const Login = () => {
    const LOGIN_URL = './auth'
    const {setAuth} = useContext(AuthContext)

    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState("")
    const [pwd, setPwd] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])


    const handleSubmit = async (e) => {
        e.preventDefault()  
        try {
            setSuccess(true);
            setUser('');
            setPwd('');
            
        } catch (error) {
            
        }   
        // if (user === "" || pwd === "") {
        //     setErrMsg("user and password are required");
        //     return
        // }
        //   console.log(user, pwd);
          
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
            user:
            </label>
            <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
            />
            <label>
                Password:
            </label>
            <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                // value={pwd}
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