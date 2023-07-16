import React from "react";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import App from "./Website/App.js";
import PressroomApp from "./Pressroom/PressroomApp.js";
import WedsinIndividualBlog from "./Pressroom/Components/WedsinIndividualBlog/WedinIndividualBlog.js";

const router = createBrowserRouter([
    {path:'wedsin_Website/' , element:<App/>},
    {path:'/Blogs' , element:<PressroomApp/>},
    {path:'/Blogs/:individualBlogId' , element:<WedsinIndividualBlog/>}
])

const MainApp = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default MainApp;