import { Box } from "@mui/material";
import error from "../../static/img/error.gif";

import "../../style/helper.scss";

const Error = () => {

    return (
        <Box
            className="d-flex justify-center"
        >
            <img src={error} alt="error"/>
        </Box>
    )
}
export default Error;