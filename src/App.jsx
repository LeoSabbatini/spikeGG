import Header from "./components/Header"
import "./global.css"
import Footer from "./Components/Footer"
import Router from "./Router"
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Router />
        <Footer />
      </div>
    </>
  )
}

export default App
