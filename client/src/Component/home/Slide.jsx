
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Button, Divider, Box, Typography, styled } from '@mui/material';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';


const responsive = {
    desktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Component = styled(Box)`
    margin-top: 10px;
    background: #FFFFFF;
    overflow:'overlay'
`;
const Deal = styled(Box)`
    display: flex;    
    padding: 15px 20px;
    display: flex;
`

const DealText = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    margin-right: 1px;
    margin-left: -14px;
    display: flex;
`
const Timer = styled(Box)`
    color: #7f7f7f;
    margin-left: 10px;
    display: flex;
    align-items: center;
`;

const RenderTimer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const Times = styled(Box)`
    color: #7f7f7f;
    margin-left: 10px;
    display: flex;
    align-items: center;
    font-weight: 600;
    display: flex;

`;
const ViewAllButton = styled(Button)`

    margin-left: auto;
    background-color: #2874f0;
    border-radius: 2px;
    font-size: 13px;
    font-weight:600;
    display: flex;
`;
const Image = styled('img')({
    width: 'auto',
    height: 150
})
const Links = styled(Link)({
    textDecoration:'none',
    marginLeft:'auto'
})

const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px
`


export const Slide = ({products,title,timer}) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
     
    const renderer = ({ hours, minutes, seconds }) => {
        return <RenderTimer variant="span">{hours} : {minutes} : {seconds}  Left</RenderTimer>;
    };

    if (!products) {
        return null;
    }
     return(
        <Component>
            <Deal>
                <DealText>{title}</DealText>
                {
                    timer && 
                    
                    <Timer>
                      <img src={timerURL} style={{ width: 24 }} alt='time clock' />
                        <Times>
                            <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                        </Times>
                    </Timer>
                }
                
                <Links to={`product/product2`}>
                <ViewAllButton variant="contained" color="primary">View All</ViewAllButton>
                </Links>


            </Deal>
            <Divider/>
            
        <Carousel 
        responsive={responsive} 
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            transitionDuration={500}
            autoPlaySpeed={4000}
            slidesToSlide={1}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            centerMode={true}
            >
                {
                    products.map(temp => (

                        <Link to={`product/${temp.id}`} style={{textDecoration: 'none'}}>
                            <Box textAlign="center" style={{ padding: '25px 15px' }}>
                                <Image src={temp.url} />
                                <Text style={{ fontWeight: 600, color: '#212121' }}>{temp.title.shortTitle}</Text>
                                <Text style={{ color: 'green' }}>{temp.discount}</Text>
                                <Text style={{ color: '#212121', opacity: '.6' }}>{temp.tagline}</Text>
                            </Box>
                        </Link>
                    ))
                }
           </Carousel>
        </Component>
     )
}
