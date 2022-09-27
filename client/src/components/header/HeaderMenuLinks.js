import { Box, Button } from "@mui/material";
import { headerMenuLinks } from "../../links/links";
import { useNavigate } from "react-router-dom";


import "../../style/button.scss";
import "../../style/header.scss";

const HeaderMenuLinks = () => {
    const navigate = useNavigate();

    const content = headerMenuLinks.map((item, i) => <Button 
                                                        key={i}
                                                        className="button__lg button__orange button-header__menu"
                                                        onClick={() => navigate(`${item.link}`)}
                                                     >
                                                        {item.title}
                                                     </Button>)

    return (
        <Box className="header-menu__links">
            {content}
        </Box>
    )
}
export default HeaderMenuLinks;