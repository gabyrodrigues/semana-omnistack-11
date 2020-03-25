import React, { useState } from 'react';
import Header from './Header';

function App() {
    const [counter, setCounter] = useState(0); //sempre que for preciso que o componente armazene uma informação nele, é preciso utilizar um estado

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <Header> Contador: {counter} </Header>
            <button onClick={increment}>Incrementar</button>
        </div>
    );
}

export default App;
