import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    {/* <ChevronDoubleUpIcon id='go-back-top' className="sticky float-right z-50 bottom-8 mr-10 p-2 w-10 h-10 stroke-1 hover:stroke-2 bg-black text-white rounded-full hover:scale-x-105 ring-1 ring-transparent" onClick={()=>backToTop()}></ChevronDoubleUpIcon> */}
  </React.StrictMode>,
)

