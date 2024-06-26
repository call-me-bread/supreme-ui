import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "./App.tsx";
import {SignUp} from "./pages/sign-up.tsx";
import {Main} from "./pages/main.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/home",
        element: <Main/>,
    },
    {
        path: "/sign-up",
        element: <SignUp/>,
    },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
