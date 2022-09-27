import { changeActiveMenu, activeMenu } from "../../store/activeMenu";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "../../style/helper.scss";
import "../../style/button.scss";
import "../../style/menu.scss";


const MenuButton = ({item, changeActiveMenu, activeMenu}) => {
    const navigate = useNavigate()

    const buttonStyle = activeMenu == item.id ? "button__md button-border__orange active" : "button__md button-border__orange"

    return (
        <Box className="button-menu__wrapper  menu-button__wrapper">
            <Button
                className={buttonStyle}
                onClick={() => {
                    navigate(`?categoryId=${item.id}`);
                    changeActiveMenu(item.id)
                }}
            >
                <Typography
                    className="menu-button__title"
                >
                    {item.name}
                </Typography>
            </Button>
        </Box>
    )
}

const mapStateToProps = createStructuredSelector({
    activeMenu
})

const mapDispatchToProps = dispatch => ({
    changeActiveMenu: bindActionCreators(changeActiveMenu, dispatch)
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(MenuButton)