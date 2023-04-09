import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"


function Cards() {
  return (
    <div>
        <Container fluid>
            <Row>
                <Col>
                    <Card style={{ width: '18rem'}}>
                        <Card.Body className="text-muted">This text is generated in the Card.Body object, within the Card object.</Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title style={{color: "black"}}>Card.Title object nested in Card.Body.</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card.Subtitle nested in Card.Body.</Card.Subtitle>
                            <Card.Text className="text-muted">Card.Text nested in Card.Body.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br/>
            <Row>
                <Card>
                    <Card.Header style={{color: "black"}}>Card.Header nested in Card object.</Card.Header>
                    <Card.Body>
                        <Card.Title className="text-muted">Headers and Footers</Card.Title>
                    </Card.Body>
                    <Card.Footer className="text-muted">Card.Footer nested in Card Object</Card.Footer>
                </Card>
            </Row>
        </Container>
    </div>
  )
}

export default Cards