import { useState, useEffect } from 'react';
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
      
          <article className="topico">
            <h3>O que é a plataforma?</h3>
            <p>"Este é um sistema simples e direto dedicado a organizar e salvar informações sobre times de e-sports. Nossa plataforma funciona como um diretório central onde você pode registrar equipes de diferentes modalidades e manter um histórico claro dos elencos.</p>
          </article>
          <article className="topico">
            <h3>Para quem é este site?</h3>
            <p>Feito para qualquer entusiasta de esportes eletrônicos, desde quem acompanha os grandes campeonatos mundiais até quem está montando um time amador com os amigos para jogar no fim de semana.</p>
          </article>
          <article className="topico">
            <h3>Nosso Objetivo</h3>
            <p>Nosso principal objetivo é facilitar a gestão e a visualização de line-ups para fãs, jogadores amadores e organizadores de pequenos torneios. Queremos oferecer um espaço limpo, rápido e fácil de usar para mapear o cenário competitivo de qualquer jogo.</p>
          </article>
          <article className="topico">
            <h3>Principais Funcionalidades</h3>
            <p>Cadastro de Times, gerenciamento de jogadores e organização prática visualizando a lista completa de times cadastrados e descobrindo quem joga onde.</p>
          </article>
      </section>
    </main>
  );
}