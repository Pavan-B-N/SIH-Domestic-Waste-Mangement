import "./Carousel.css"
import { useEffect, useState } from "react"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from "@mui/material";

function Carousel({images,size}) {
    const defaultProperties={
        width:size || "500px"
    }
    const [currentSlide,setCurrentSlide]=useState(0);

    function nextSlide(){
        setCurrentSlide(currentSlide=>(currentSlide+1)%images.length);
    }
    function previousSlide(){
        setCurrentSlide(currentSlide=>(currentSlide-1)%images.length);
    }
    useEffect(()=>{
        const timer=setInterval(nextSlide,5000)
        return ()=>clearInterval(timer);
    },[])

    return (
        <div className="carousel" style={defaultProperties} >
            <img src={images[currentSlide]}  />
            <div className="buttons">
                <IconButton  onClick={previousSlide} sx={{color: "white",background:"rgb(39, 40, 41,0.7)"}}><ArrowBackIosNewIcon/></IconButton>
                <IconButton  onClick={nextSlide} sx={{color: "white",background:"rgb(39, 40, 41,0.7)"}}><ArrowForwardIosIcon/></IconButton>
            </div>
            <div className="sliderIndication">
            {
                images.map((item,index)=>{
                    return <div className={`dot ${currentSlide === index ? "active" : ""}`} key={index} />
                })
            }
            </div>
        </div>
    )
}
export default Carousel