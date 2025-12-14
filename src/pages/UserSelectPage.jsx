import { useOutletContext } from "react-router-dom";
import UserIcon from "../components/UserIcon";

const UserSelectPage = () => {
    const {existingUsers, setExistingUsers, setSelectedUser} = useOutletContext()

    return (
        <>
            <div style={{height:"100%", display:"flex", alignItems:"center"}}>
                <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap", gap:"2vmin"}}>
                    {existingUsers.map((createdUser)=>(
                        <UserIcon createdUser={createdUser} setSelectedUser={setSelectedUser}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default UserSelectPage;