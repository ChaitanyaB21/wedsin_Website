import React from "react";
import Singles from './Components/Singles';
import FindLove from "./Components/FindLove";
import LandingPage from "./Components/LandingPage/LandingPage.js";
import DiscoverTraits from "./Components/DiscoverTraits";
import HowItWorks from "./Components/HowItWorks";
import MatterMost from "./Components/MatterMost";
import FamilyMatters from "./Components/FamilyMatters";
import Privacy from "./Components/Privacy";
import Compatibility from "./Components/Compatibility";

const App = () => {
    return (
        <React.Fragment>

            <LandingPage />
            <br /><br />
            <Singles />
            <FindLove />
            <DiscoverTraits />
            <HowItWorks/>
            <MatterMost/>
            <FamilyMatters/>
            <Privacy/>
            <Compatibility/>
        </React.Fragment>
    )
}

export default App;