import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import WedsinBlogs from "./Components/WedsinBlogs/WedsinBlogs";
import SoulMateCarousel from "./Components/SoulMateCarousal/SoulMateCarousal";
import Footer from "./Components/Footer/Footer";
import LifePartnerBlog from "./Components/LifePartnerBlog/LifePartnerBlog";
import Explore from "./Components/Explore/Explore";
// import FollowUs from "./Components/FollowUs/FollowUs";

const PressroomApp = () => {
    return(
        <>
            <Navbar/>
            <WedsinBlogs/>
            <SoulMateCarousel/>
            <Explore/>
            <LifePartnerBlog/>
            {/* <FollowUs/> */}

            <Footer/>
        </>
    )
}

export default PressroomApp



// Keywords -wedsin, matrimony, self love, soulmate, marriage, wedding, how do i find love, life partner, better half, shaadi, jeevansaathi