import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const sushiApi = createApi({
    reducerPath: "sushi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL}),
    endpoints: builder => ({
        getCategory: builder.query({
            query: () => "/category"
        }),
        getSpecial: builder.query({
            query: (arg) => ({
                url: "/special",
                params: {
                    product: JSON.stringify(arg)
                }
            })
        }),
        getProduct: builder.query({
            query: (params) => ({
                url: "/product",
                params: {
                    categoryId: params
                }
            })
        }),
        loginUser: builder.mutation({
            query: (body) => ({
                url: "/user/login",
                method: "POST",
                body: body
            })
        }),
        postCart: builder.mutation({
            query: (body) => ({
                url: "/cart",
                method: "POST",
                body: body
            })
        })
    })
})

export const { useGetCategoryQuery, useGetSpecialQuery, useGetProductQuery, useLoginUserMutation, usePostCartMutation } = sushiApi;
export default sushiApi;