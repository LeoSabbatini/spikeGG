import React, { useState, useEffect } from 'react';
import './sobre.css';

export default function Sobre() {
  const [topicos, setTopicos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/topicos")
      .then((response) => response.json())
      .then((data) => setTopicos(data))
      .catch((error) => console.error("Erro ao buscar tópicos:", error));
  }, []);

  return (
    <main className="container">
      <h1>Sobre o Projeto</h1>

      <section className="sobre-content">
        {topicos.map((topico) => (
          <article key={topico.id} className="topico">
            <h3>{topico.titulo}</h3>
            <p>{topico.texto}</p>
          </article>
        ))}
      </section>
    </main>
  );
}