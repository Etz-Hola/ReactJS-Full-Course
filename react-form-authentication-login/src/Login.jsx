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
            j
        </p>
    </section>
    </>
  )
}

export default Login