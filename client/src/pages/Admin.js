import React from "react";
import { Box } from "@mui/material";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import AdminCreateType from "../components/admin/AdminCreateType";
import AdminEditType from "../components/admin/AdminEditType";
import AdminProductList from "../components/admin/AdminProductList";
import AdminProductCreate from "../components/admin/AdminProductCreate";
import AdminCategoryList from "../components/admin/AdminCategoryList";
import AdminProductEdit from "../components/admin/AdminProductEdit";

import { Admin as AdminComponent, Resource, fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import "../style/helper.scss";


const Admin = () => {
    const token = localStorage.getItem("token")

    if(!token) {
        return <Navigate to="/" replace={true}/>
    }

    const decodToken = jwt_decode(token)

    if(decodToken.role !== "ADMIN") {
        return <Navigate to="/login" replace={true}/>
    }

    const fetchJson = async (url, options = {}) => {
        const token = localStorage.getItem("token")
        if (!options.headers) {
            options.headers = new Headers({ Accept: 'application/json' })
        }
        options.headers.set('Authorization', `Bearer ${token}`)

        const data = await fetchUtils.fetchJson(url, options);
        
        if(data.json?.rows) {
            return {...data, json: data.json.rows}
        }        
        return data
    }


    //----------------

    const dataProvider = jsonServerProvider(process.env.REACT_APP_BASE_URL, fetchJson);

    const myDataProfider = {
        ...dataProvider,
        create: async (resource, params) => {
            if (!params.data.file) {
                return dataProvider.create(resource, params);
            }
            let formData = new FormData();
            
            formData.append('name', params.data.name);
            formData.append('cost', params.data.cost);
            formData.append('weight', params.data.weight);
            formData.append('components', params.data.components);
            formData.append('categoryId', params.data.categoryId);
            formData.append('img', params.data.file.rawFile);
            
            return fetchJson(`${process.env.REACT_APP_BASE_URL}/${resource}`, {
                method: 'POST',
                body: formData,
            }).then(({json}) => ({
                data: { ...params.data, id: json.id },
            }));
        }
    };

    return (
        <>
        <Box className="mt-64">
            <AdminComponent dataProvider={myDataProfider} basename="/admin">
                <Resource name="category" list={AdminCategoryList} create={AdminCreateType} edit={AdminEditType}/>
                <Resource name="product" list={AdminProductList} create={AdminProductCreate} edit={AdminProductEdit}/>
            </AdminComponent>
        </Box>
            
        </>
    )
}

// const mapDispatchToProps = (dispatch) => ({
//     fetchTypes: bindActionCreators(fetchTypes, dispatch),
//     fetchCategory: bindActionCreators(fetchCategory, dispatch)
// })

// const connector = connect(null, mapDispatchToProps)

// export default connector(Admin);
export default Admin;