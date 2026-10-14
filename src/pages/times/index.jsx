import { useEffect, useState } from 'react'
import "./times.css"

export default function index() {

    const [times, setTimes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/times")
            .then((response) => response.json())
            .then((data) => setTimes(data))
            .catch((error) => console.log(error))
    }, [])

    const deleteTimes = (id) => {
        fetch(`http://localhost:3000/times/${id}`, { method: "DELETE" })
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