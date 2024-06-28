import React, { useState, useEffect } from 'react';
import './Home.css';

interface minhaProps {
    title: String;
    description: String;
}

function Home(props: minhaProps) {
    const [completed, setCompleted] = useState(false);
    const [tarefa, setTarefa] = useState("");

    useEffect(() => {
        if (completed) {
            setTarefa("Parabéns! Você concluiu a tarefa.");
        }
    }, [completed]);

    return (
        <>
            <h1 className="titulo">Home</h1>
            <img src="./src/assets/20160624202841.jpg" alt="Imagem Tela Inicial" className="img" />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <h3>{tarefa}</h3>
            <p>Conclua a tarefa</p>
            <button onClick= {() => setCompleted(true)}>Concluir tarefa</button>

        </>
    );
}

export default Home;