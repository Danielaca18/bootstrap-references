import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Stack from "react-bootstrap/Stack"

function Stacks() {
    return (
        <>
        <Card style={{"background-color": "#969595"}}>
            <Stack gap={2}>
                <div className="bg-primary border" style={{color: "black"}}>Vertical Stack</div>
                <div className="bg-primary border" style={{color: "black"}}>Element 1</div>
                <div className="bg-primary border" style={{color: "black"}}>Element 2</div>
                <div className="bg-primary border" style={{color: "black"}}>Element 3</div>
            </Stack>
            <br/><br/>
            <Stack direction="horizontal" gap={2}>
                <div className="bg-primary border" style={{color: "black"}}>Horizontal Stack</div>
                <div className="bg-primary border" style={{color: "black"}}>Element 1</div>
                <div className="bg-primary border" style={{color: "black"}}>Element 2</div>
                <div className="bg-primary border" style={{color: "black"}}>Element 3</div>
                <div className="bg-primary border" style={{color: "black"}}>Element 4</div>
            </Stack>
        </Card>
        </>
    )
}

export default Stacks