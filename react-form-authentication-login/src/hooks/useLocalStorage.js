import { useState, useEffect } from "react"

const getLocalValue = (key, initValue) => {
    // SSR Next Js
    if (typeof window === 'undefined') return initValue

    // if a value is already stored in local storage

    const locaValue = JSON.parse(localStorage.getItem(key))

    if (locaValue) return locaValue

    // return result of a function
    if (initValue instanceof Function) return initValue()

    return initValue
}

const useLocalStorage = (key, initValue) => {
    const [value, setValue] = useState(() => {
        return getLocalValue(key, initValue) 
        kjk  k v
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

  return [value, setValue]
}

export default useLocalStorage 