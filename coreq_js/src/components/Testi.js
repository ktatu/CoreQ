import React, { useState } from "react"
import { useOutletContext } from "react-router-dom"

const Testi = () => {
    const [count, setCount] = useState(0)
    let testObject = useOutletContext()
    console.log(testObject)
    const increment = () => setCount(c => c + 1);

    return <button onClick={increment}>{count}</button>;
}

export default Testi