import { Box, Grid, Typography } from "@mui/material";
import "../../style/helper.scss";

const HeaderTopItem = ({item: {icon, iconTitle, title}}) => {

    return (
        <Grid item xl={4} md={4} sm={12} className="header-top__item">
            <Box 
                className="header-top__inner"
            >
                <img 
                    className="header-top__icon"
                    src={icon} 
                    alt={iconTitle}
                />
                <Box className="ml-12">
                    <Typography
                        className="header-top__text"
                    >
                        {title}
                    </Typography>
                </Box>
            </Box>
        </Grid>
    )
}
export default HeaderTopItem;