import testService from './services/test'
import React, {useState} from 'react'

import FileUpload from './components/FileUpload'

const App = () => {
    const [testState, setTestState] = useState('')

    // tarvitaan .then() promise valuen saamiseksi, muuten palauttaa promisen
    //testService.asynch().then(data => setTestState(data.hello))

    return (
        <div className="App">
            <p>{testState}</p>
            <FileUpload/>
        </div>

    );
}

export default App
