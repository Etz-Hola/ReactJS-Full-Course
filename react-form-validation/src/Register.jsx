import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "./api/axios"


const USE_REGEX = /^[A-Z][a-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";


const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('')
  const [validName, setValidName] = useState(false)
  const [userFocus, setUserFocus] = useState(false)


  const [pwd, setPwd] = useState('')
  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setpwdFocus] = useState(false)

  const [matchPwd, setMatchPwd] = useState("")
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState((false))

  const [errMsg, setErrMsg] = useState("")
  const [ success, setSuccess] = useState(false)

  useEffect(() => {
    useRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USE_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(USE_REGEX.test(pwd));
  }, [pwd, matchPwd])

  

  return (
    <div>Register</div>
  )
}

export default Register
