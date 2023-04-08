import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/esm/Container"

function Buttons() {
    const stdBtns = [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
        "light",
        "dark",
    ]

    const outlineBtns = [
        "outline-primary",
        "outline-secondary",
        "outline-success",
        "outline-warning",
        "outline-danger",
        "outline-info",
        "outline-light",
        "outline-dark",
    ]

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2>Standard Buttons</h2>
                    </Col>
                    <Col>
                        <h2>Outline Buttons</h2>
                    </Col>
                </Row>
                <br/>
                {Array.from({length: 8}).map((it, index) => (
                    <div key={it}>
                        <Row key={it}>
                            <Col>
                                <Button key={it} variant={stdBtns[index]}>Variant: {stdBtns[index]}</Button>
                            </Col>
                            <Col>
                                <Button key={it} variant={outlineBtns[index]}>Variant: {outlineBtns[index]}</Button>
                            </Col>
                        </Row>
                        <br/>
                    </div>
                ))
                }
                
            </Container>
        </div>
    )
}

export default Buttons