import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './general/ScrollToTop.jsx'
import PageTransition from './general/pageTransition.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/k72-clone">
      <ScrollToTop />
      <PageTransition />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
