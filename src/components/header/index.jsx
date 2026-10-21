import './header.css'
export default function index() {
  return (
    <header className="header">
        <section className="title-container">
            <img src="./public/favicon.ico" alt="Logo" className="logo" />
            <div className="title-text">
            <h1 className='title'>SpikeGG</h1>
            <h2 className='subtitle'>O melhor jeito de acompanhar seu time favorito</h2>
            </div>
        </section>
    </header>
  )
}
