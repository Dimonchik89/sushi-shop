import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import error from "../static/img/error.gif";

import "../style/helper.scss";

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <Box>
            <Box
                className="d-flex justify-center"
            >
                <img src={error} alt="error"/>
            </Box>
            <Box
                className="d-flex justify-center"
            >
                <Button
                    
                    onClick={() => navigate("/")}
                >
                    Go Home
                </Button>
            </Box>
        </Box>
    )
}
export default ErrorPage;