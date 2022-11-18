import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
//importamos el provider para que se pueda proporcionar un store al componente de la aplicacion
import { Provider } from "react-redux";
//se importa el store
import store from "./redux/store"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/*  se envuelve el componente de la aplicacion con el provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
