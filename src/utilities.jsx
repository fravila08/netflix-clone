export const LoadUsers = () => {
    const storedUsers = localStorage.getItem("users");
    let users = storedUsers ? JSON.parse(storedUsers) : [];
    return users;
};
