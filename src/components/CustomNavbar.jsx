import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
const CustomNavbar = () => {
  return (
    <>
      <Navbar bg="warning" data-bs-theme="dark">
        <Container fluid>
          <Link to="/" className="navbar-brand">
            <img
              src="https://cdn.pixabay.com/photo/2019/07/08/01/40/moon-4323627_1280.png"
              alt="logo_navbar"
              width={70}
            />{' '}
            <span className="fst-italic ms-3">
              Mìtìo - your Meteo around the world
            </span>
          </Link>
        </Container>
      </Navbar>
    </>
  )
}
export default CustomNavbar
