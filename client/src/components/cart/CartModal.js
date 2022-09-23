import { useEffect, useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { showModal, closeCart, product } from "../../store/cart";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import {cart} from "../../static/img/cart.js";
import CartModalItem from "./CartModalItem";
import useSumma from "../../hook/useSumma";
import { usePostCartMutation } from "../../store/api/sushiApi";

import "../../style/button.scss";
import "../../style/cart.scss";

const CartModal = ({ product, showModal, closeCart }) => {
    const [email, setEmail] = useState("")
    const {countSumma, summa} = useSumma();
    const [postCart] = usePostCartMutation();

    useEffect(() => {
        countSumma(product)
    }, [product])

    const content = product.length ? product?.map((item, i) => <CartModalItem key={i} product={item}/>) : cart;

    const handleSend = async () => {
        const products = product.map(item => ({id: item.id, name: item.name, qty: item.qty}))
        const obj = {
            date: new Date(),
            email: email,
            product: JSON.stringify(products)
        }
        await postCart(obj)
    }

    return (
        <div>
            <Modal
                open={showModal}
                onClose={() => closeCart()}
                disableRestoreFocus={false}
                disableAutoFocus={false}
            >
                <Box className="cart-modal">
                    {content}
                    <Box>
                        <Typography
                            className="cart-modat__text"
                            align="right"
                        >
                            {product.length ? `${summa}$` : null}
                        </Typography>
                    </Box>
                    <Box
                        className="align-center justify-center"
                        sx={{display: product.length ? "flex" : "none", alignItems: "center", marginTop: "2rem"}}
                    >
                        <TextField
                            className="cart-modat__input"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Box
                            sx={{marginLeft: "2rem"}}
                        >
                            <Button
                                className="button__sm button__green"
                                onClick={handleSend}
                            >
                                Buy
                            </Button>
                        </Box>

                    </Box>
                </Box>
                
            </Modal>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    showModal,
    product
})

const mapDispatchToProps = dispatch => ({
    closeCart: bindActionCreators(closeCart, dispatch),
})

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(CartModal);