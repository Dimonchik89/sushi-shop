import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useLoginUserMutation } from "../store/api/sushiApi";
import jwt_decode from "jwt-decode";

import "../style/helper.scss";
import "../style/login.scss";

const Login = () => {
    const token = localStorage.getItem("token")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const [loginUser] = useLoginUserMutation()
    const navigate = useNavigate();

    if(token) {
        const decodToken = jwt_decode(token)

        if(decodToken.role === "ADMIN") {
            return <Navigate to="/admin" replace={true}/>
        }
    }

    const submit = async (e) => {
        e.preventDefault();
        const data = await loginUser({email, password})
        console.log(data);
        const token = await data.data.token;
        localStorage.setItem("token", token);
            if(data.data) {
                navigate("/admin")
            } else {
                alert("Error")
            }
    }

    return (
        <Box 
            className="d-flex d-column justify-center align-center login"
        >
            <Typography
                className="login__title"
            >
                Login
            </Typography>
            <Box
                className="login-form__wrapepr"
            >
                <form
                    onSubmit={submit}
                    className="d-flex d-column login__form"
                >
                    <Box
                        className="login-input__wrapper"
                    >
                        <TextField 
                            name="email" 
                            label="Email" 
                            variant="outlined" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Box>
                    <Box
                        className="login-input__wrapper"
                    >
                        <TextField 
                            name="password" 
                            type="password" 
                            label="Email" 
                            variant="outlined" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Box>

                    <Button type="submit">Login</Button>
                </form>
            </Box>
        </Box>
        
    )
}
export default Login;