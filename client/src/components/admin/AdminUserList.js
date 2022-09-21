import React from "react";
import { List, Datagrid, DateField, TextField, EditButton } from 'react-admin';

const AdminUserList = () => {

    return (
        <>
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="email" />
                <TextField source="role" />
                <DateField source="createdAt" />
                <DateField source="updatedAt" />
                <EditButton />
            </Datagrid>
        </List>
        </>
    )
}
export default AdminUserList;