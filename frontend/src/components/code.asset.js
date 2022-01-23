import React, { useEffect, useState } from 'react'
import Prism from "prismjs"
import text from "./text.txt"

const Code = ({ language, codeStr }) => {
    const [code, setCode] = useState('')

    useEffect(() => {
        Prism.highlightAll()
    }, [])

    const testCode = true === true ? true : false

    fetch(text)
        .then(t => {
            console.log('------- ', t)
            return t.text()
        })
        .then(txt => {
            setCode(txt)
            console.log('text ', txt)
            console.log(typeof(txt))
        })

    return (
        <pre className="line-numbers show-language normalize-whitespace">
            <code className={"language-"+language}>{code}</code>
        </pre>
    )
}

export default Code