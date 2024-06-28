import React, { useState } from 'react';
import './App.css';
import Home from './paginas/home/Home';

function App() {
  const [valor, setValor] = useState(0);
  function handleClick() {
    setValor(valor + 1);
  }

  return (
    <div>
      <Home
        title="Componente Home"
        description="Este é um componente Home que recebe props." />
      <p>O valor é: {valor}</p>
      <button onClick={handleClick}>Adicionar 1</button>
    </div>
  );
}

export default App;