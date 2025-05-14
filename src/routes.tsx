import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { Tasks } from "./pages/tasks";
import { Login } from "./pages/login";

import { Layout } from "./components/layout";
import { Private } from "./private/private";

const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/tasks',
                element:<Private><Tasks/></Private>
            },
            {
                path:'/login',
                element:<Login/>
            }
        ]
    }
])

export {router}