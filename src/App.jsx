import Inicio from "./sections/inicio/Inicio"
import Header from "./components/Header"
import Sobre from "./sections/sobre/Sobre"
const App = () => {
  return (
    <div className="landing">
      <Header/>
      <Inicio/>
      <Sobre/>
    </div>
  )
}

export default App
