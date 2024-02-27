import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import imageData from './components/DataComponent.jsx'
import AppClass from "./AppClass";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data={imageData}/>
    {/* <AppClass data={ImageData}/> */}
  </React.StrictMode>,
)