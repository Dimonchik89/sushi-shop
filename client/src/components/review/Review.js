import { Box, Container, Grid, Typography } from "@mui/material";
import Carousel from "../carousel/Carousel";
import ReviewCard from "./ReviewCard";
import photo from "../../static/img/review-photo.png"

import "../../style/review.scss";

const Review = () => {
    let carouselArr = []
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

    for(let i = 0; i < 5; i++) {
        carouselArr.push(<ReviewCard key={i} photo={photo} text={text} rating={i+1}/>)
    }

    return (
        <Box className="review">
            <Container maxWidth="xl">
                <Grid container spacing={{xl: 4, md: 0}}>
                    <Grid 
                        item 
                        xl={4}
                        md={12}
                        className="d-flex align-center"    
                    >
                        <Box>
                            <Typography
                                className="review__title"
                            >
                                What our customers say
                            </Typography>
                            <Typography
                                className="review__text"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xl={8} md={12}>
                        <Carousel slides={carouselArr}/>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    )
}
export default Review;