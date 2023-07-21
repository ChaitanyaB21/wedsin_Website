import React from "react";
// import Navbar from "./Components/Navbar/Navbar";
import WedsinBlogs from "./Components/WedsinBlogs/WedsinBlogs";
import SoulMateCarousel from "./Components/SoulMateCarousal/SoulMateCarousal";
// import Footer from "./Components/Footer/Footer";
import LifePartnerBlog from "./Components/LifePartnerBlog/LifePartnerBlog";
import Explore from "./Components/Explore/Explore";
import Footer2 from "../Website/Components/Footer2/Footer2";
import Navbar2 from "../Website/Components/Navbar2/navbar2";
// import FollowUs from "./Components/FollowUs/FollowUs";

const PressroomApp = () => {
    return(
        <>
            {/* <Navbar/> */}
            <Navbar2/>
            <WedsinBlogs/>
            <SoulMateCarousel/>
            <Explore/>
            <LifePartnerBlog/>
            {/* <FollowUs/> */}

            {/* <Footer/> */}
            <Footer2/>
        </>
    )
}

export default PressroomApp



// Keywords -wedsin, matrimony, self love, soulmate, marriage, wedding, how do i find love, life partner, better half, shaadi, jeevansaathi