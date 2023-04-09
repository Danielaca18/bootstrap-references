import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import ModalTemplate from './ModalTemplate';

function Modals() {
    let [showing, setShowing] = useState(false);

    return (
        <div>
            {
                !showing ? 
                    <Button onClick={() => {setShowing(true)}}>Click here for a preview</Button> :
                    <ModalTemplate title="Example Modal" body="This is a modal." showing={showing} setShowing={setShowing}></ModalTemplate>
            }
        </div>
    )
}

export default Modals