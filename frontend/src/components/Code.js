import React, { useEffect, useState } from "react"

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx"
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism"

SyntaxHighlighter.registerLanguage("jsx", jsx)

const Code = ({ codeStr }) => {
    //const [code, setCode] = useState('')

    //const testCode = true === true ? true : false

    const handleClick = (lineNum) => {
        console.log("click ", lineNum )
    }

    console.log("render Code")
    return (
        <SyntaxHighlighter
            language="jsx"
            showLineNumbers
            wrapLines
            style={xonokai}
            lineProps={(lineNumber) => ({
                onClick() {
                    handleClick(lineNumber)
                }
            })}
        >
            {codeStr}
        </SyntaxHighlighter>
    )
}

export default Code

/*
        <pre className="line-numbers show-language normalize-whitespace">
            <code className={"language-"+language}>{String(codeStr)}</code>
        </pre>
*/