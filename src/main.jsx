import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CarCard from './components/CarCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <CarCard />
  </StrictMode>,
)
