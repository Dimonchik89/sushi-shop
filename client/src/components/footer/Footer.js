import { Box, Container, Grid } from "@mui/material";
import HeaderMenuLogo from "../header/HeaderMenuLogo";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";

import "../../style/helper.scss";
import "../../style/button.scss";
import "../../style/footer.scss";

const Footer = () => {

    return (
        <Box className="footer">
            <Container maxWidth="xl">
                <Grid container spacing={{xl: 2, lg: 0}} >
                    <Grid item xl={4} lg={4} md={4}>
                        <HeaderMenuLogo/>
                    </Grid> 
                    <Grid item xl={4} lg={8} md={8} className="d-flex align-center">
                        <FooterContact title="Call Back" phone="+1 703-697-1776"/>
                    </Grid>
                    <Grid item xl={4} lg={0} className="d-flex align-center justify-end footer-social__wrapepr">
                        <FooterSocial/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default Footer;