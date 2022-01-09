import React, { useEffect } from "react"
import { Container, Box } from "@mui/material"
import Prism from "prismjs"

import "./css/prism.css"

const App = () => {

    useEffect(() => {
        Prism.highlightAll()
    }, [])

    return (
        <Container maxWidth="md">
            <pre>
                <code className="language-jsx">
                    {`
                    return (
                        <Container maxWidth="lg">
                            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
                            <pre>
                                <code>
                                    
                                </code>
                            </pre>
                        </Container>
                    )
                    `}
                </code>
            </pre>
        </Container>
    )
}

export default App

// <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
