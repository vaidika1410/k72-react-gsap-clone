import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agency from './pages/Agency'
import Projects from './pages/Projects'
import Navbar from './general/navbar/Navbar'

const App = () => {

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='agency' element={<Agency />} />
          <Route path='projects' element={<Projects />} />
        </Routes>
      </div>
    </>
  )
}

export default App