import Image from 'react-bootstrap/Image';
import Trash from '../assets/trash.png'

const UserIcon = ({createdUser, setSelectedUser, removeUsers}) => {
    return (
        <div style={{
            display:'flex', 
            flexDirection:'column', 
            position:'relative',
            alignItems:"center"
            }}
            onClick={()=>setSelectedUser(createdUser)}
            >
          <Image 
            src={createdUser.icon} 
            thumbnail 
              style={{
                width: "140px",
                height: "140px",
                objectFit: "cover",
            }}
          />
          <img src={Trash}
            onClick={(e)=>removeUsers(e, createdUser.id)}
            style={{
              position:"absolute",
              top:"0",
              left:"0",
              height:"15%",
              width:"15%"
            }}
          />
          <h5 style={{
            position:'absolute',
            bottom:'0',
            color:"white"
          }}>{createdUser.name}</h5>
        </div>
    )
}

export default UserIcon;
