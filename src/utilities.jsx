export const loadUsers = () => {
    const storedUsers = localStorage.getItem("users");
    let users = storedUsers ? JSON.parse(storedUsers) : [];
    return users;
};

export const loadSelectedUser = () => {
    const selectedUser = localStorage.getItem("selectedUser");
    return selectedUser ? JSON.parse(selectedUser) : null
}

export const handleUserLoading = () => {
    const existingUsers = loadUsers()
    const selectedUser = loadSelectedUser()
    console.log([existingUsers, selectedUser])
    return [existingUsers, selectedUser]
}