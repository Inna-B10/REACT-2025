import { useState } from "react"

export function TextInput() {
    const [value, setValue] = useState("")

    function handleUpdate(newValue) {
        console.log(newValue)
        setValue(newValue)
    }

    return (
        <input
            type="text"
            onChange={(event) => handleUpdate(event.target.value)}
            /** Here we are ensuring that the value the user is seeing is the same we have stored */
            value={value}
        />
    )
}
