import { Box, Container } from "@mui/material";
import MenuButton from "./MenuButton";

import "../../style/helper.scss";
import "../../style/button.scss";
import "../../style/menu.scss";

const MenuButtonBlock = ({categories}) => {
    const content = categories?.map((item, i) => <MenuButton key={i} item={item}/>)

    return (
        <Container maxWidth="md">
            <Box
                className="d-flex justify-center"
                sx={{flexWrap: "wrap", marginTop: "2rem"}}
            >
                {content}
            </Box>
        </Container>
    )
}



export default MenuButtonBlock;