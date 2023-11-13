import { useRef, useState, useEffect } from "react";

const Login = () => {
    const userRef = useRef()
    const errRef = useRef()

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [username, password])


  return (
    <>
    <section>
        <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive" >
            {errMsg}
        </p>
        <h1>Sign In</h1>
        <form>
            <label>
                Username:
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUserName(e.target.value)}
                    value={username}
                    required
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setUserName(e.target.value)}
                    value={password}
                    required
                />
            </label>
            <button>Sign Up</button>
            
        </form>
    </section>
    </>
  )
}

export default Login