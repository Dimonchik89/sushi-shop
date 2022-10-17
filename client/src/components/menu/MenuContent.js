import { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Card from "../card/Card";
import Spinner from "../spinner/Spinner";
import { useGetProductQuery } from "../../store/api/sushiApi";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { activeMenu } from "../../store/activeMenu";
import { useSearchParams } from "react-router-dom";

import "../../style/menu.scss";


const MenuContent = ({activeMenu}) => {
    const [ searchParams, setSearchParams ] = useSearchParams();

    const { data, error, isLoading } = useGetProductQuery(searchParams.get("categoryId") ? searchParams.get("categoryId") : activeMenu);

    useEffect(() => {
        // console.log(searchParams.get("categoryId"));
    }, [searchParams.get("categoryId")])
    
    if(isLoading) {
        return <Spinner/>
    }

    const content = data?.rows?.map((item, i) => <Card key={i} item={item}/>)
    
    return (
        <Box className="menu-contant">
            <Grid container rowSpacing={{xl: 11, lg: 8, md: 5, sm: 3}}>
                {content}
            </Grid>
        </Box>
    )
}

const mapStateToProps = createStructuredSelector({
    activeMenu
})

const connector = connect(mapStateToProps)

export default connector(MenuContent);