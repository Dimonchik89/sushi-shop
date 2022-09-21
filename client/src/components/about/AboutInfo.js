import { Box, Typography } from "@mui/material"
import homeRight from "../../static/icon/home_right.png";
import rice from "../../static/icon/rice.png";
import roll from "../../static/icon/roll.png";

import "../../style/helper.scss";
import "../../style/about.scss";

const AboutInfo = () => {

    return (
        <Box className="d-flex d-column justify-center about-description">
            <Box className="about-title__wrapper">
                <Typography
                    className="about__title"
                >
                    About us
                </Typography>
                <Typography
                    className="about__subtitle"
                >
                    This is our story
                </Typography>
            </Box>
            <Typography
                className="about__text"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>

            <Box
                className="about-home__wrapper"
            >
                <img 
                    className="about-home__icon"
                    src={homeRight} 
                    alt="homeRight"
                />
            </Box>
            <Box
                className="about-rice__wrapper"
            >
                <img 
                    className="about-rice__icon"
                    src={rice} 
                    alt="rice"
                />
            </Box>
            <Box
                className="about-roll__wrapper"
            >
                <img 
                    className="about-roll__icon"
                    src={roll} 
                    alt="roll"
                />
            </Box>
        </Box>
    )
}
export default AboutInfo;