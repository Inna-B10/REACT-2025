import { useState, createContext } from "react";

export const AppContext = createContext({
    theme: "light",
    setTheme: ()=> {},
    number: 0,
    setNumber: () => {},
    time: new Date(),
    setTime: () => {},
    timeAtEnter: new Date(),
    setTimeAtEnter: () => {}

})

export default function AppContextProvider({children}) {
    const [theme, setTheme] = useState("")
    const [number, setNumber] = useState(0)
    const [timeAtEnter, setTimeAtEnter] = useState(new Date())
    const [time, setTime] = useState(new Date())
    return (
        <AppContext.Provider value={{ theme, setTheme, number, setNumber, time, setTime, timeAtEnter, setTimeAtEnter }}>
            {children}
        </AppContext.Provider>
    )
}