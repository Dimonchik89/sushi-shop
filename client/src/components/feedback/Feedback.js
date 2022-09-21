import { Box, Typography } from "@mui/material";
import message from "../../static/icon/message.png";

import "../../style/helper.scss";
import "../../style/feedback.scss";

const Feedback = () => {

    return (
        <Box className="feedback">
            <Box
                className="d-flex justify-center align-center"
            >
                <img 
                    className="feedback__icon"
                    src={message} 
                    alt="message"
                />
                <Typography
                    className="feedback__text"
                >
                    Leave your feedback about the sushi place or a recent delivery
                </Typography>
            </Box>
        </Box>
    )
}
export default Feedback;