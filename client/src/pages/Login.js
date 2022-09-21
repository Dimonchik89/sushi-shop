import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Button, TextField } from "@mui/material";
import { useLoginUserMutation } from "../store/api/sushiApi";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const [loginUser] = useLoginUserMutation()
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        const data = await loginUser({email, password})
            if(data.data) {
                navigate("/admin")
            } else {
                alert("Error")
            }
    }

    return (
        <>
        <h1>Login</h1>
        <form
            onSubmit={submit}
        >
            <TextField 
                name="email" 
                label="Email" 
                variant="outlined" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField 
                name="password" 
                type="password" 
                label="Email" 
                variant="outlined" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">Login</Button>
        </form>
        </>
        
    )
}
export default Login;