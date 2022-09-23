import React, { useRef, useEffect } from "react";
import { Datagrid, List, TextField } from "react-admin";
import { Button } from "@mui/material";

const AdminOrderList = React.forwardRef(() => {
    // const idRef = useRef(null)
    
    // useEffect(() => {
    //     console.log(idRef);
    // }, [idRef])

    return (
        <List >
            <Datagrid>
                <TextField source="id"/>
                <TextField source="date" />
                <TextField source="email" />
                <TextField source="product" />
                <Button>
                    Accepted
                </Button>
                <Button>
                    Send
                </Button>
                <Button>
                    Error
                </Button>
            </Datagrid>
        </List>
    )
})
export default AdminOrderList;