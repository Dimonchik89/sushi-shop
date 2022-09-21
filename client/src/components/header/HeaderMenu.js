import { Box, Container } from "@mui/material";
import HeaderMenuLogo from "./HeaderMenuLogo";
import HeaderMenuLinks from "./HeaderMenuLinks";
import HeaderMenuContact from "./HeaderMenuContact";

import "../../style/helper.scss";
import "../../style/header.scss";

const HeaderMenu = () => {

    return (
        <Box className="header-menu">
            <Container maxWidth="xl">
                <Box className="d-flex space-between align-center">
                    <HeaderMenuLogo/>
                    <HeaderMenuLinks/>
                    <HeaderMenuContact/>    
                </Box>
            </Container>
        </Box>
    )
}
export default HeaderMenu;