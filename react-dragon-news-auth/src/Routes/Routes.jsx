import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import News from "../Pages/News";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: (() => fetch('news.json'))
            },
            {
                path:'/about',
                element: <About></About>
            },
            {
                path:'/career',
                element: <Career></Career>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/news/:_id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: (()=> fetch('news.json'))
            }
        ]
    }
])

export default router;