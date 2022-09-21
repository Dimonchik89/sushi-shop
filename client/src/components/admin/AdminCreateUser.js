import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const AdminCreateUser = () => {

    return (
        <Create  resource="user/register" redirect="/admin/user">
            <SimpleForm>
                <TextInput source="email" />
                <TextInput source="password" />
                <TextInput source="role" />
            </SimpleForm>
        </Create>
    )
}
export default AdminCreateUser