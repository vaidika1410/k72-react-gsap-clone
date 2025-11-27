import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './general/ScrollToTop.jsx'
import PageTransition from './general/pageTransition.jsx'
import NavContext from './general/navbar/NavContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <PageTransition />
      <NavContext>
        <App />
      </NavContext>
    </BrowserRouter>
  </StrictMode>,
)
