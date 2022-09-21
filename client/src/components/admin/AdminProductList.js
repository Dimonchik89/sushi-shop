import React from "react";
import { Datagrid, EditButton, List, NumberField, TextField } from "react-admin";


const AdminProductList= () => {

    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <NumberField source="cost" />
                <TextField source="weight"/>
                <TextField source="components"/>
                <TextField source="categoryId"/>
                <TextField source="img"/>
                <EditButton />
            </Datagrid>
        </List>
    )
}


export default AdminProductList;