import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { detectPerfMode } from './fx/motion'
import './styles/index.css'

detectPerfMode()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
