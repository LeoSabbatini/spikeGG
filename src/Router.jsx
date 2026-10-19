import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Nav from './components/nav'
import CadastroTime from "./pages/cadastro"
import Times from "./pages/times"
import CadastroJogador from './pages/cadastroJogadores'
import Sobre from './pages/sobre'
import Jogadores from './pages/jogadores'
export default function Router() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />}></Route>
      <Route path="/cadastroTime" element={<CadastroTime />} />
      <Route path="/times" element={<Times />} />
      <Route path="/cadastroJogadores" element={<CadastroJogador />} />
      <Route path="/jogadores" element={<Jogadores/>}/>
    </Routes>
    </BrowserRouter>
  )
}