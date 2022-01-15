import React, { useState } from "react"
import { useOutletContext } from "react-router-dom"

const Lapsi = () => {
    const [count, setCount] = useOutletContext()
    const increment = () => setCount(c => c + 1)

    console.log("------------")
    return <button onClick={increment}>{count}</button>;
}

export default Lapsi