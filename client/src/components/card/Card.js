import { Grid, Box, Typography, Button } from "@mui/material";
import image from "../../static/img/sashimi.png";
import { addProduct } from "../../store/cart/cartSlice";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "../../style/helper.scss";
import "../../style/button.scss";
import "../../style/card.scss";

const Card = ({label = null, item, addProduct}) => {
    let image;
    if(item?.img) {
        image = JSON.parse(item.img)[0]
    }

    const handleAdd = () => {

    }

    return (
        <Grid item xl={3} md={6} sm={12}>
            <Box
                className="card"
            >
                <Box
                    className="card-img__wrapper"
                >
                    <img 
                        className="card__img"
                        src={`https://newtechshop.s3.eu-north-1.amazonaws.com/${image}`} 
                        alt="photo"
                    />
                    {label}
                </Box>

                <Box
                    className="card-info"
                >
                    <Typography
                        className="card__title"
                        align="center"
                    >
                        {item?.name}
                    </Typography>
                </Box>

                <Box
                    className="card-description"
                >
                    <Typography
                        className="card__text"
                        align="center"
                    >
                        {item?.components}
                    </Typography>
                </Box>

                <Typography
                    className="card__text"
                >
                    {`${item?.weight}g`}
                </Typography>

                <Box className="d-flex space-between card-button__wrapper">
                    <Button
                        className="button__sm button-border__green"
                    >
                        {`$ ${item?.cost}`}
                    </Button>
                    <Button
                        className="button__sm button__green"
                        onClick={() => addProduct({...item, qty: 1})}
                    >
                        +add
                    </Button>
                </Box>
            </Box>
        </Grid>
    )
}

const mapDispatchToProps = dispatch => ({
    addProduct: bindActionCreators(addProduct, dispatch)
})

const connector = connect(null, mapDispatchToProps);

export default connector(Card);