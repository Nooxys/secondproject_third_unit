import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import CustomHome from './CustomHome'
import CustomNavbar from './components/CustomNavbar'
import Details from './components/Details'
import CustomFooter from './components/CustomFooter'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
function App() {
  return (
    <>
      <BrowserRouter>
        <body className="pagebody ">
          <header>
            <CustomNavbar className="" />
          </header>
          <main>
            <Routes>
              <Route element={<CustomHome />} path="/" />
              <Route element={<Details />} path="/Details/:cityID" />
              <Route element={<NotFound />} path="*" />
            </Routes>
          </main>
          <footer>
            <CustomFooter />
          </footer>
        </body>
      </BrowserRouter>
    </>
  )
}

export default App
