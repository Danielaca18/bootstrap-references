import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

function ModalTemplate({title, body, showing, setShowing}) {

    return (
        <div className="modal show">
            <Modal
            centered
            show={showing}
            >
                <Modal.Header onClick={() => {setShowing(false)}}>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{body}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => {setShowing(false)}}>Done</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalTemplate