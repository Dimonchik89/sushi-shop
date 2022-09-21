import { Box, Container, Grid } from "@mui/material";
import HeaderTopItem from "./HeaderTopItem";
import { headerTopLinks } from "../../links/links";

import "../../style/header.scss";

const HeaderTop = () => {

    const content = headerTopLinks.map((item, i) => <HeaderTopItem key={i} item={item}/>)

    return (
        <Box className="header-top">
            <Container maxWidth="xl">
                <Grid container>
                    {content}
                </Grid>
            </Container>
        </Box>

    )
}
export default HeaderTop;