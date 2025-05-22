import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './pages/index'
import './style/styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode basename="/Conversor-de-Moedas">
  <Main />
</StrictMode>

)
