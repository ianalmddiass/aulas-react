import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Inicio from './Inicio.jsx'

const contentor = document.getElementById("root")
const origem = createRoot(contentor)
origem.render(<Inicio/>)
