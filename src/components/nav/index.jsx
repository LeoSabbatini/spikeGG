import { Link } from 'react-router-dom'
import './nav.css'
export default function index() {
  return (
    <nav >
        <ul className="menu">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/Sobre">Sobre</Link></li>
            <li><Link to="/Usuarios">Times</Link></li>
            <li><Link to="/cadastro">CadastroTimes</Link></li>
            <li><Link to="/cadastroNews">cadastroJogadores</Link></li>
        </ul>
    </nav>
  )
}
