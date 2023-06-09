import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/Col"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"

function Home() {
  return (
    <div>
        <header>
        <h1>React-Bootstrap References</h1>
        <p>Welcome to the React-Bootstrap References<br/>Here you will find references to some of the<br/>components provided by the library</p>
        </header>
        <Container fluid>
            <Row>
            <Col>
            <Button href="/buttons" variant="primary" size="lg">Buttons</Button>
            </Col>
            <Col>
            <Button href="/cards" variant="primary" size="lg">Cards</Button>
            </Col>
            <Col>
            <Button href="/stacks" variant="primary" size="lg">Stacks</Button>
            </Col>
            </Row>
        </Container>
        
    </div>
  )
}

export default Home