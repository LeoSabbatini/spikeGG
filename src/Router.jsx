import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Nav from './components/nav'
import CadastroTime from "./pages/cadastro"
import Times from "./pages/times"
import CadastroJogador from './pages/cadastroJogadores'
export default function Router() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastroTime" element={<CadastroTime />} />
      <Route path="/times" element={<Times />} />
      <Route path="/cadastroJogadores" element={<CadastroJogador />} />

    </Routes>
    </BrowserRouter>
  )
}