import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agency from './pages/Agency'
import Projects from './pages/Projects'
import Navbar from './general/navbar/Navbar'
import MenuPage from './general/MenuPage'

const App = () => {

  return (
    <>
      <div>
        <MenuPage />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agency' element={<Agency />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
    </>
  )
}

export default App