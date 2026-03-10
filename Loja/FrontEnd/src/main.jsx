import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const contentor = document.getElementById("root")
const origem = createRoot(contentor)

origem.render(<App/>)