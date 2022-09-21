import phone from "../../static/icon/phone.png";
import location from "../../static/icon/location.png";
import { Box, Typography } from "@mui/material";

import "../../style/helper.scss";


const HeaderMenuContact = () => {

    return (
        <Box className="header-menu__contact">
            <Box>
                <Box 
                    className="d-flex justify-end"
                    sx={{marginBottom: { xl: "2.1rem", md: ".7rem"}}}
                >
                    <Typography
                        className="header-contact__text"
                    >
                        +1 703-697-1776
                    </Typography>
                    <Box
                        className="ml-12"
                    >
                        <img 
                            className="header-contact__icon"
                            src={phone} 
                            alt="phone"
                        />
                    </Box>
                </Box>

                <Box className="d-flex justify-end">
                    <Typography
                        className="header-contact__text"
                    >
                        Miami, FLO 
                    </Typography>
                    <Box
                        className="ml-12"
                    >
                        <img 
                            className="header-contact__icon"
                            src={location} 
                            alt="location"
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default HeaderMenuContact;