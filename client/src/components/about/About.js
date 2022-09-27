import { Box, Container, Grid, Typography } from "@mui/material";
import aboutImg from "../../static/img/about.jpg"
import AboutInfo from "./AboutInfo";

import "../../style/helper.scss";
import "../../style/about.scss";

const About = () => {

    return (
        <Box className="about">
            <Container sx={{maxWidth: { xl: "xl", lg: "lg" }}} >
                <Grid 
                    container 
                    columnSpacing={{xl: 11, lg: 0}} 
                    rowSpacing={{xl: 0, lg: 2}} 
                    className="container-wrapper"
                >
                    <Grid item xl={6} lg={12} className="about-container__img">
                        <Box className="about-img__wrapper">
                            <img 
                                className="about__img"
                                src={aboutImg} 
                                alt="about"
                            />
                        </Box>
                    </Grid>
                    <Grid item xl={6} lg={12} className="about-container__text">
                        <AboutInfo/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default About;