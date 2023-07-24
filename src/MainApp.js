import React from "react";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import App from "./Website/App.js";
import PressroomApp from "./Pressroom/PressroomApp.js";
import WedsinIndividualBlog from "./Pressroom/Components/WedsinIndividualBlog/WedinIndividualBlog.js";
import ContactUs from "./ContactUs/ContactUs.js";
import AboutUs from "./AboutUs/AboutUs.js";
import Faq from "./Faq/Faq.js";
import Jobs from "./Jobs/Jobs.js";

const router = createBrowserRouter([
    {path:'wedsin_Website/' , element:<App/>},
    {path:'/Blogs' , element:<PressroomApp/>},
    {path:'/Blogs/:individualBlogId' , element:<WedsinIndividualBlog/>},
    {path:'/Contact' , element:<ContactUs/>},
    {path:'/About' , element:<AboutUs/>},
    {path:'/faq' , element:<Faq/>},
    {path:'/Jobs' , element:<Jobs/>}
])

const MainApp = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default MainApp;