import Container from "react-bootstrap/Container"
import Alert from "react-bootstrap/Alert"
import Stack from "react-bootstrap/Stack"

function Alerts() {
  return (
    <Container>
        <Stack gap={3}>
            <Alert variant="primary">Variant: Primary</Alert>
            <Alert variant="seconday">Variant: Secondary</Alert>
            <Alert variant="success">Variant: Success</Alert>
            <Alert variant="danger">Variant: Danger</Alert>
            <Alert variant="light">Variant: Light</Alert>
            <Alert variant="dark">Variant: Dark</Alert>
        </Stack>
    </Container>
  )
}

export default Alerts