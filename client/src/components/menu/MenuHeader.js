import { Box, Typography } from "@mui/material";
import homeLeft from "../../static/icon/home_left.png";
import homeRight from "../../static/icon/home_right.png";
import sushiIcon from "../../static/icon/sushi_icon.png";

import "../../style/helper.scss";
import "../../style/menu.scss";

const MenuHeader = () => {

    return (
        <Box className="menu-header">
            <Typography className="title">
                OUR MENU
            </Typography>
            <Box
                className="menu-home__left-wrapper"
            >
                <img 
                    className="menu-home__left"
                    src={homeLeft} 
                    alt="home_left"
                />
            </Box>
            <Box
                className="menu-home__right-wrapper"
            >
                <img 
                    className="menu-home__right"
                    src={homeRight} 
                    alt="home_right"
                />
            </Box>
            <Box
                className="menu-sushi__icon-wrapper"
            >
                <img 
                    className="menu-sushi__icon"
                    src={sushiIcon} 
                    alt="sushi_icon"
                />
            </Box>
        </Box>
    )
}
export default MenuHeader;