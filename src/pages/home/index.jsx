import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {
    const [totalTimes, setTotalTimes] = useState(0);
    const [totalJogadores, setTotalJogadores] = useState(0);

    useEffect(() => {
        fetch("http://localhost:8080/times")
            .then((res) => res.json())
            .then((data) => setTotalTimes(data.length))
            .catch((error) => console.error(error));

        fetch("http://localhost:8080/jogadores")
            .then((res) => res.json())
            .then((data) => setTotalJogadores(data.length))
            .catch((error) => console.error(error));
    }, []);

    return (
        <main className="container home">
            <section className="hero">
                <h1>Hub de E-Sports</h1>
                <p>O diretório definitivo para você organizar, registrar e acompanhar line-ups de Valorant, CS2, League of Legends e muito mais.</p>
                
                <div className="cta-buttons">
                    <Link to="/times" className="btn btn-primary">Ver Times</Link>
                    <Link to="/cadastroTime" className="btn btn-secondary">Criar Time</Link>
                </div>
            </section>

            <section className="stats">
                <article className="stat-card">
                    <h3>{totalTimes}</h3>
                    <p>Times Cadastrados</p>
                </article>
                <article className="stat-card">
                    <h3>{totalJogadores}</h3>
                    <p>Jogadores Registrados</p>
                </article>
            </section>
        </main>
    );
}