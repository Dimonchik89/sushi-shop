import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React, { useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Spiner from "../spiner/Spiner";
import ErrorPage from "../../pages/ErrorPage"


const AdminAllItems = ({items, loading, error, title, deleteHandler}) => {

    useEffect(() => {
        console.log(title, items);
        
    }, [items])

    if(loading) {
        return <Spiner/>
    }

    if(error) {
        return <ErrorPage/>
    }

    const listInner = items?.map((item, i) => <ListItem disablePadding key={i}>
                                                    <ListItemButton>
                                                        <ListItemText primary={item.name} />
                                                        <DeleteIcon onClick={() => deleteHandler(item.id)}/>
                                                    </ListItemButton>
                                                </ListItem>)

    return (
        <List>
            {listInner}
        </List>
    )
}
export default AdminAllItems;