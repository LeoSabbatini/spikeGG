import { useEffect, useState } from 'react'
import "./times.css"

export default function Index() {

    const [times, setTimes] = useState([]);
    const [jogadores, setJogadores] = useState([]); 

    useEffect(() => {
        fetch("https://6ad5fdadf71f154ac4864986.mockapi.io/Times")
            .then((response) => response.json())
            .then((data) => setTimes(data))
            .catch((error) => console.error("Erro no fetch de times:", error))

        fetch("https://6ad5fdadf71f154ac4864986.mockapi.io/Jogadores")
            .then((response) => response.json())
            .then((data) => setJogadores(data))
            .catch((error) => console.error("Erro no fetch de jogadores:", error))
    }, [])

    const deleteTimes = (id) => {
        fetch(`https://6ad5fdadf71f154ac4864986.mockapi.io/Times/${id}`, { method: "DELETE" })
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
                        {time.nome}
                    </strong>
                    <br />
                    <strong>
                        {time.jogo}
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