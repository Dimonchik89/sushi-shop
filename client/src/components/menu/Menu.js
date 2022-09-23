import { useEffect } from "react";
import { Box, Container } from "@mui/material";
import MenuHeader from "./MenuHeader";
import MenuButtonBlock from "./MenuButtonBlock";
import MenuContent from "./MenuContent";
import { useGetCategoryQuery } from "../../store/api/sushiApi";
import ErrorPage from "../../pages/ErrorPage";
import Spinner from "../spinner/Spinner";
import { useSearchParams } from "react-router-dom";
import { changeActiveMenu } from "../../store/activeMenu";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Error from "../error/Error";

import "../../style/helper.scss";
import "../../style/button.scss";
import "../../style/menu.scss";


const Menu = ({changeActiveMenu}) => {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const { data, error, isLoading } = useGetCategoryQuery()

    useEffect(() => {
        changeActiveMenu(+searchParams.get("categoryId") || 2)
    }, [searchParams.get("categoryId")])

    if(error) {
        return <Error/>
    }

    if(isLoading) {
        return <Spinner/>
    }

    return (
        <Box className="menu">
            <Container maxWidth="xl">
                <MenuHeader/>
                <MenuButtonBlock categories={data}/>
                <MenuContent/>
            </Container>
        </Box>
    )
}

const mapDispatchToProps = dispatch => ({
    changeActiveMenu: bindActionCreators(changeActiveMenu, dispatch)
})

const connector = connect(null, mapDispatchToProps)

export  default connector(Menu);