import Header from "./components/header"
import "./global.css"
import Footer from "./components/footer"
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
