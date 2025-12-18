import { useOutletContext } from "react-router-dom";
import UserIcon from "../components/UserIcon";
import CreateUserIcon from "../components/CreateUser";

const UserSelectPage = () => {
    const {existingUsers, setSelectedUser, removeUsers} = useOutletContext()

    return (
        <>
            <div style={{height:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap", gap:"2vmin"}}>
                    {existingUsers.map((createdUser, idx)=>(
                        <UserIcon key={createdUser.id} createdUser={createdUser} removeUsers={removeUsers} setSelectedUser={setSelectedUser}/>
                    ))}
                    {existingUsers.length < 4 ? <CreateUserIcon/> : null}
                </div>
            </div>
        </>
    )
}

export default UserSelectPage;