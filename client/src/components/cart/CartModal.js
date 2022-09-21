import { Box, Button, Modal, Typography } from "@mui/material";
import { showModal, closeCart, product } from "../../store/cart";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import {cart} from "../../static/img/cart.js";

import "../../style/cart.scss";

const CartModal = ({ product, showModal, closeCart }) => {

    const content = cart;

    return (
        <div>
            <Modal
                open={showModal}
                onClose={() => closeCart()}
                disableRestoreFocus={false}
                disableAutoFocus={false}
            >
                <Box className="cart-modal">
                    
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
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