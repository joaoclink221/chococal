import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Inicio from "./sections/inicio/Inicio.jsx"
import Sobre from "./sections/sobre/Sobre.jsx"
import Contato from "./sections/contatos/Contato.jsx"
import Chocolates from "./sections/chocolates/Chocolates.jsx"



import {register} from 'swiper/element-bundle'

register()
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element = {<App />}/>
        <Route path='/inicio' element = {<Inicio />}/>
        <Route path='/sobre' element = {<Sobre />}/>
        <Route path='/contato' element = {<Contato />}/>
        <Route path='/chocolate' element = {<Chocolates />}/>

      </Routes>
    </Router>
  </StrictMode>,
)
