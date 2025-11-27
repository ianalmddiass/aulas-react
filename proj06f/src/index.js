import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from "react-dom/client"
import Rotas from "./Rotas"
import 'bootstrap/dist/css/bootstrap.min.css';

const contentor = document.getElementById("root")
const origem = createRoot(contentor)

origem.render(<Rotas/>)