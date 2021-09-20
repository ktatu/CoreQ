import testService from './services/test'
import React, {useState} from 'react'

const App = () => {
    const [testState, setTestState] = useState('')

    testService.get().then((test) => {
        console.log("testprint", test.hello)    
    })

    // tarvitaan .then() promise valuen saamiseksi, muuten palauttaa promisen
    testService.asynch().then(data => setTestState(data.hello))

    return (
        <div className="App">
        <p>Terve {testState}</p>
        </div>
    );
}

export default App;
