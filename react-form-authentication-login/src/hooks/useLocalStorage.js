import { useState, useEffect } from "react"

const useLocalStorage = (key, initValue) => {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) || initValue)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify)
    })
  return (
    <div>useLocalStorage</div>
  )
}

export default useLocalStorage