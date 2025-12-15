import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Image  from 'react-bootstrap/Image';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import David from "../assets/david.jpeg";
import Lucy from "../assets/lucy.jpeg";
import Maine from "../assets/maine.jpeg";
import Rebecca from "../assets/rebecca.jpeg";

const UserFormModal = (props) => {
  const [name, setName] = useState('')
  const [icon, setIcon] = useState(David)
  const [iconKeyName, setIconKeyName] = useState("David");
  const {saveUser} = useOutletContext()

  const iconKey = {
    David, Lucy, Rebecca, Maine
  }

  const handleClose = () => {
    setName("");
    setIcon(David);
    props.onHide();
  };

  const handleSave = () => {
    saveUser({
      id: crypto.randomUUID(),
      name,
      icon,
      favorites: [],
    });

    handleClose()
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Incoming Runner 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{display:"flex", flexWrap:"wrap", gap:"2vmin"}}>
        {icon && 
        <Image
            src={icon}
            style={{
                width: "160px",
                height: "160px",
                objectFit: "cover",
                flexShrink: 0,
            }}
        />
        }
        <Form style={{flex:1}} onSubmit={(e)=>e.preventDefault()}>
            <Form.Group className='mb-3'>
                <Form.Label>Code Name</Form.Label>
                <Form.Control 
                  type='text' 
                  placeholder='codename'
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Icon Selection</Form.Label>
                <Form.Select value={iconKeyName} onChange={(e)=>{
                  setIconKeyName(e.target.value);
                  setIcon(iconKey[e.target.value]);
                }}
                >
                    {
                        Object.keys(iconKey).map((name, idx)=>(
                            <option key={idx} value={name}>{name}</option>
                        ))
                    }
                </Form.Select>
            </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button 
          onClick={handleSave} 
          disabled={!name.trim() || !icon}
        >
        Save
        </Button>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default UserFormModal