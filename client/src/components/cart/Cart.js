import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import cart from "../../static/icon/cart.png";
import { product, openCart } from "../../store/cart";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";

import "../../style/helper.scss";
import "../../style/cart.scss";

const Cart = ({product, openCart}) => {
    const [summa, setSumma] = useState(0)

    useEffect(() => {
        product?.forEach(item => {
            setSumma(summa => summa += item.cost * item.qty)
        })
    }, [product])

    return (
        <Box className="cart-wrapper">
            <Box 
                className="cart d-flex justify-center align-center"
                onClick={() => openCart()}    
            >
                <Box className="cart-icon__wrapper">
                    <img 
                        className="cart__icon"
                        src={cart} 
                        alt="cart"
                    />
                </Box>

                <Box className="cart-content__wrapper">
                    <Typography
                        className="cart__text"
                    >
                        {product?.length}
                    </Typography>
                    <Typography
                        className="cart__text"
                    >
                        {summa}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

const mapStateToProps = createStructuredSelector({
    product
})

const mapDispatchToProps = dispatch => ({
    openCart: bindActionCreators(openCart, dispatch)
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(Cart);