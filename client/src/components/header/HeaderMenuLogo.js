import { Box, Typography } from "@mui/material";
import logo from "../../static/img/logo.png";

import "../../style/helper.scss";

const HeaderMenuLogo = () => {

    return (
        <Box className="header-menu__logo">
            <Box className="d-flex align-center">
                <img 
                    className="header__logo"
                    src={logo} 
                    alt="logo"
                />
                <Box>
                    <Typography
                        className="header-menu__logo-title"
                    >
                        Sushi-sempai
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        component="span"
                    >
                        Asian food delivery
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
export default HeaderMenuLogo;