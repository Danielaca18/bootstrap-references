import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Accordions() {
  return (
    <Container>
        <Row>
            <Col>
                <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion.Header</Accordion.Header>
                        <Accordion.Body>
                            <p class="text-start">
                            This is an example of an accordion:<br/>
                            &emsp;{"<Accordion>"}<br/>
                            &emsp;&emsp;{"<Accordion.Item>"}<br/>
                            &emsp;&emsp;&emsp;{"<Accordion.Body>"}<br/>
                            &emsp;&emsp;&emsp;&emsp;Example body text...<br/>
                            &emsp;&emsp;&emsp;{"</Accordion.Body>"}<br/>
                            &emsp;&emsp;{"</Accordion.Item>"}<br/>
                            &emsp;{"<Accordion/>"}
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </Col>
        </Row>
    </Container>
  )
}

export default Accordions