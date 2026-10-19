import { useEffect, useState } from 'react'
import "./times.css"

export default function Index() {

    const [times, setTimes] = useState([]);
    const [jogadores, setJogadores] = useState([]); 

    useEffect(() => {
        fetch("http://localhost:8080/times")
            .then((response) => response.json())
            .then((data) => setTimes(data))
            .catch((error) => console.error("Erro no fetch de times:", error))

        fetch("http://localhost:8080/jogadores")
            .then((response) => response.json())
            .then((data) => setJogadores(data))
            .catch((error) => console.error("Erro no fetch de jogadores:", error))
    }, [])

    const deleteTimes = (id) => {
        fetch(`http://localhost:8080/times/${id}`, { method: "DELETE" })
            .then(() => {
                setTimes(times.filter((time) => time.id !== id))
            })
            .catch((error) => console.error(error))
    }
    return (
        <section className='container times'>
            <h2>Lista de Times</h2>

            {times.map((time) => (
                <article className='content-times' key={time.id}>
                    <strong>
                        Nome do Time: {time.nome}
                    </strong>
                    <br />
                    <strong>
                        Jogo: {time.jogo}
                    </strong>
                    <br />

                    <div>
                        <h4>Jogadores:</h4>
                        <ul>
                            {jogadores
                                .filter((jogador) => jogador.time === time.nome) 
                                .map((jogador) => (
                                    <li key={jogador.id}>{jogador.nome}</li>
                                ))
                            }
                        </ul>
                        {jogadores.filter((jogador) => jogador.time === time.nome).length === 0 && (
                            <small>Nenhum jogador cadastrado.</small>
                        )}
                    </div>

                    <button
                        className='delete'
                        onClick={() => deleteTimes(time.id)}
                    >
                        Deletar
                    </button>
                    <hr />
                </article>
            ))}

        </section>
    )
}