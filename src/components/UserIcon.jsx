import Image from 'react-bootstrap/Image';

const UserIcon = ({createdUser, setSelectedUser}) => {
    
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
          <h5 style={{
            position:'absolute',
            bottom:'0',
            color:"white"
          }}>{createdUser.name}</h5>
        </div>
    )
}

export default UserIcon;
