import { useEffect, useState } from 'react'
import "./jogadores.css"

export default function Jogadores() {

    const [jogadores, setJogadores] = useState([]); 

    useEffect(() => {
        fetch("https://6ad5fdadf71f154ac4864986.mockapi.io/Jogadores")
            .then((response) => response.json())
            .then((data) => setJogadores(data))
            .catch((error) => console.error("Erro no fetch de jogadores:", error))
    }, [])

    const deleteJogador = (id) => {
        fetch(`https://6ad5fdadf71f154ac4864986.mockapi.io/Jogadores/${id}`, { method: "DELETE" })
            .then(() => {
                setJogadores(jogadores.filter((jogador) => jogador.id !== id))
            })
            .catch((error) => console.error("Erro ao deletar jogador:", error))
    }

    return (
        <section className='container jogadores'>
            <h2>Lista de Jogadores</h2>

            {jogadores.map((jogador) => (
                <article className='content-jogadores' key={jogador.id}>
                    
                    <strong>
                        Jogador: {jogador.nome}
                    </strong>
                    <br />
                    <strong>
                        Time: {jogador.time}
                    </strong>
                    <br />
                    <br />

                    <button
                        className='delete'
                        onClick={() => deleteJogador(jogador.id)}
                    >
                        Deletar
                    </button>
                    <hr />
                </article>
            ))}

            {jogadores.length === 0 && (
                <p>Nenhum jogador encontrado.</p>
            )}

        </section>
    )
}