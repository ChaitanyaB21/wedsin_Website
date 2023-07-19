import React from "react";
import Navbar from "./Components/Navbar/Navbar";
// import Singles from './Components/Singles/Singles';
// import FindLove from "./Components/FindLove/FindLove";
import LandingPage from "./Components/LandingPage/LandingPage.js";
// import DiscoverTraits from "./Components/DiscoverTraits/DiscoverTraits";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import MatterMost from "./Components/MatterMost/MatterMost";
// import FamilyMatters from "./Components/FamilyMatters/FamilyMatters";
// import Privacy from "./Components//Privacy/Privacy";
// import Compatibility from "./Components/Compatibility/Compatibility";
// import HeardYou from "./Components/HeardYou/HeardYou";
// import JustRemember from "./Components/JustRemember/JustRemember";
import RelationshipAdvice from "./Components/RelationshipAdvice/RelationshipAdvice";
// import Footer from "./Components/Footer/Footer";
import FamilyMatters2 from "./Components/FamilyMatters2/FamilyMatters2";
import Privacy2 from "./Components/Privacy2/Privacy2";
import Compatibility2 from "./Components/Compatibility2/Compatibility2";
import Singles1 from "./Components/Singles1/Singles1";
// import FindLove1 from "./Components/FindLove1/FindLove1";
// import JustRemember2 from "./Components/JustRemember2/JustRemember2";
import Footer1 from "./Components/Footer1/Footer1";
import FindLove2 from "./Components/FindLove2/FindLove2";
import DiscoverTraits2 from "./Components/DiscoverTraits2/DiscoverTraits2";

const App = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <LandingPage />         
            <MatterMost/>
            <FamilyMatters2/>
            <Privacy2/>
            <Compatibility2/>
            <Singles1/>
            <DiscoverTraits2/>
            {/* <FindLove1/> */}
            {<FindLove2/>}
            <HowItWorks/>
            {/* <JustRemember2/> */}
            <RelationshipAdvice/>
            <Footer1/>
            {/* <Footer/> */}
            {/* <Singles /> */}
            {/* <FamilyMatters/> */}
            {/* <FindLove /> */}
            {/* <DiscoverTraits /> */}
            {/* <Privacy/> */}
            {/* <Compatibility/> */}
            {/* <HeardYou/> */}
            {/* <JustRemember/> */}
        </React.Fragment>
    )
}

export default App;