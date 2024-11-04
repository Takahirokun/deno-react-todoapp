import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToDo from './ToDo.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDo />
  </StrictMode>,
)
