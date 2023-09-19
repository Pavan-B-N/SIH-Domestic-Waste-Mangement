import "./Home.css"

import Description from '../Description/Description';
import NavBox from '../../components/NavBox/NavBox';
import Carousel from '../../components/Carousel/Carousel';
import TrackerBox from "../../components/TrackerBox/TrackerBox";
import Footer from "../../components/Footer/Footer";
//icons
import DeleteIcon from '@mui/icons-material/Delete';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PeopleIcon from '@mui/icons-material/People';
import { Typography } from "@mui/material";
function Home() {
    const descriptiveImages = [
        "https://globaltrashsolutions.com/wp-content/uploads/2019/04/plastic-containers-for-garbage-of-different-types-1200x900.png",
        "https://wastech.com.au/wp-content/uploads/2021/12/solid-waste-management-system-e1640128004926.jpeg",
        "https://www.researchgate.net/publication/279196726/figure/fig2/AS:667814385967115@1536230765401/The-big-picture-of-a-waste-collection-management-system-A-list-of-possible-stakeholders.jpg"
    ]

    return (
        <div className='home'>
            <NavBox />
            <div className='public-message-container'>
                <div className='awareness-message'>
                    <Description description={"Domestic waste comes from a variety of sources, especially food waste, unnecessary purchases, and single-use packaging. Domestic waste can lead to disease, air pollution and environmental contamination. Treatment options for domestic waste include landfill sites, incineration for energy, recycling, and composting"} />
                </div>
                <Carousel images={descriptiveImages} size="420px" />
            </div>
            <div >
                <Description title={"Why Domestic Waste Management is Important"} description={"Improperly managed solid waste can have serious environmental consequences. It can contaminate soil, air, and water and harm wildlife and ecosystems. Effective solid waste management helps reduce the amount of waste. The solid waste thus ends up in landfills and ensures that hazardous waste is disposed of safely."} />
            </div>

            <Typography variant="h4" sx={{color:"#793FDF"}}>Currently We Are Tracking</Typography>
            <div className="tracker-container">
            <TrackerBox  Icon={DeleteIcon} title="Dustbin" record={27} />
            <TrackerBox  Icon={LocalShippingIcon} title="Garbage Truck" record={58} />
            </div>

            <Footer />
        </div>
    )
}

export default Home
