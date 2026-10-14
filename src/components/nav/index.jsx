import { Link } from 'react-router-dom'
import './nav.css'
export default function index() {
  return (
    <nav >
        <ul className="menu">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/times">Times</Link></li>
            <li><Link to="/cadastroTime">CadastroTimes</Link></li>
            <li><Link to="/cadastroJogadores">cadastroJogadores</Link></li>
        </ul>
    </nav>
  )
}
