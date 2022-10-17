import { Box, Container, Grid, Typography } from "@mui/material";
import Card from "../card/Card";
import New from "../new/New";
import { useGetSpecialQuery } from "../../store/api/sushiApi";
import Error from "../error/Error";
import Spinner from "../spinner/Spinner";

import "../../style/helper.scss";
import "../../style/special.scss";

const Special = () => {
    const { data, error, isLoading } = useGetSpecialQuery([2,4,5,6])

    if(error) {
        return <Error/>
    }

    if(isLoading) {
        return <Spinner/>
    }

    const content = data?.map((item, i) => <Card key={i} label={<New/>} item={item}/>)
    
    return (
        <Box className="special">
            <Container maxWidth="xl">
                <Box>
                    <Typography
                        className="title"
                    >
                        Special offers
                    </Typography>
                </Box>

                <Box className="special-card__wrapper">
                    <Grid 
                        container 
                        // spacing={{xl: 11, lg: 20}}
                        rowSpacing={{lg: 10, md: 5, sm: 5}}
                    >
                        {content}
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Special;