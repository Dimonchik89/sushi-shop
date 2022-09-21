import { Box, Container, Grid, Typography } from "@mui/material";
import aboutImg from "../../static/img/about.jpg"
import AboutInfo from "./AboutInfo";

import "../../style/helper.scss";
import "../../style/about.scss";

const About = () => {

    return (
        <Box className="about">
            <Container maxWidth="xl">
                <Grid container columnSpacing={{xl: 11, md: 0}} rowSpacing={{xl: 0, md: 2}}>
                    <Grid item xl={6} md={12} className="about-container__img">
                        <Box className="about-img__wrapper">
                            <img 
                                className="about__img"
                                src={aboutImg} 
                                alt="about"
                            />
                        </Box>
                    </Grid>
                    <Grid item xl={6} md={12} className="about-container__text">
                        <AboutInfo/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default About;