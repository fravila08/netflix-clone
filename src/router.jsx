import { createHashRouter } from "react-router-dom";
import App from "./App.jsx"

const router = createHashRouter([{
    element: <App/>,
    path:'/'
}])

export default router;