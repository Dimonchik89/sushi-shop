import { Box, Button, Typography } from "@mui/material"

import "../../style/helper.scss";
import "../../style/button.scss";
import "../../style/footer.scss";

const FooterContact = ({title, phone}) => {

    return (
        // <Box 
        //     className="d-flex space-between align-center footer-contact"
        // >   
        //     <Typography
        //         className="footer__title"
        //     >
        //         {phone}
        //     </Typography>
        //     <Button
        //         className="button__lg button__green footer__button"
        //     >
        //         {title}
        //     </Button>
        // </Box>
        <Box 
            className="d-flex space-between align-center footer-contact"
        >   
            <Box 
                className="footer__title-wrapper"
            sx={{width: { md: "50%" }, textAlign: "center"}}>
                <Typography
                    className="footer__title"
                >
                    {phone}
                </Typography>
            </Box>
            <Box 
                className="footer__button-wrapper"
                sx={{width: { md: "50%" }}}>
                <Button
                    className="button__lg button__green footer__button"
                >
                    {title}
                </Button>
            </Box>

        </Box>
    )
}
export default FooterContact;