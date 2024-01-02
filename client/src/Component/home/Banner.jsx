import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../../constents/data";
import { styled } from "@mui/material";

const Image = styled('img')({

    width: "205vh",
    height: "100%",
    margin: "1.5vh 6vh 0 2vh",
    opacity: "90%"

})
const responsive = {
    desktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
export const Banner = () => {
    return (
        <Carousel
            responsive={responsive} dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
            swipeable={false}
            draggable={false}
            showDots={true}
            infinite={true}
            autoPlay={true}
            transitionDuration={500}
            autoPlaySpeed={4000}
            removeArrowOnDeviceType={["tablet", "mobile"]}

        >{
                bannerData.map(data => (
                    <Image src={data.url} alt="Banner Image" />
                ))}
        </Carousel>
    )
}
