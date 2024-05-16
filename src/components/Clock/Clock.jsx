import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../context/AppContext";

export const Clock = () => {
    const { theme, setTime, time } = useContext(AppContext);

useEffect(()=> {
    const timer = setInterval(()=> {
setTime(new Date())
    }, 1000)
    return ()=> {
        clearInterval(timer)
    }
}, [])

const formattedTime = time.toLocaleTimeString();

    return (
        <div className={` ${theme === "light" ? "text-black" : "text-white"} transition-colors duration-1000`}>
<p>{formattedTime}</p>
        </div>
    )
}