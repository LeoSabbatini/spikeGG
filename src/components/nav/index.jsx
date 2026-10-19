import { Link } from 'react-router-dom'
import './nav.css'
export default function Index() {
  return (
    <nav >
        <ul className="menu">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/times">Times</Link></li>
            <li><Link to="/cadastroTime">Cadastrar times</Link></li>
            <li><Link to="/cadastroJogadores">Cadastrar jogadores</Link></li>
            <li><Link to="/jogadores">Jogadores</Link></li>
        </ul>
    </nav>
  )
}
