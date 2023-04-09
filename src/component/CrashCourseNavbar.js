import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

function CrashCourseNavbar() {
  return (
    <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand href="home">React-BootStrap Ref</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="buttons">Buttons</Nav.Link>
                <Nav.Link href="cards">Cards</Nav.Link>
                <Nav.Link href="stacks">Stacks</Nav.Link>
                <Nav.Link href="alerts">Alerts</Nav.Link>
                <Nav.Link href="accordions">Accordions</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default CrashCourseNavbar