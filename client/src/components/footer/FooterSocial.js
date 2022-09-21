import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

import instagram from "../../static/icon/instagram.png";
import facebook from "../../static/icon/facebook.png";
import telegram from "../../static/icon/telegram.png";

const FooterSocial = () => {

    return (
        <Box className="footer-social d-flex align-center">
            <Box
                className="footer-icon__wrapper"
            >
                <Link to="https://www.instagram.com/" target="_blank">
                    <img className="footer__icon" src={instagram} alt="instagram"/>
                </Link>
            </Box>
            <Box
                className="footer-icon__wrapper"
            >
                <Link to="https://m.facebook.com/login/?locale2=ru_RU" target="_blank">
                    <img className="footer__icon" src={facebook} alt="facebook"/>
                </Link>
            </Box>
            <Box
                className="footer-icon__wrapper"
            >
                <Link to="https://web.telegram.org/z/" target="_blank">
                    <img className="footer__icon" src={telegram} alt="telegram"/>
                </Link>
            </Box>
        </Box>
        
    )
}
export default FooterSocial;