import { useState } from 'react';
import Image from 'react-bootstrap/Image';
import UserFormModal from './UserForm';
import AddSymbol from "../assets/addSymbol.png"

const CreateUserIcon = () => {
    const [modalShow, setModalShow] = useState(false)
    
    return (
        <>
          <Image 
            src={AddSymbol}
            thumbnail 
              style={{
                width: "140px",
                height: "140px",
                objectFit: "cover",
            }}
            onClick={()=>setModalShow(true)}
          />
          <UserFormModal 
            show={modalShow} 
            onHide={()=>setModalShow(false)}
          />
        </>
    )
}

export default CreateUserIcon;