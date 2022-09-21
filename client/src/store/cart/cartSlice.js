import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [],
    showModal: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            
            if(state.product.length) {
                let goodInc = false;
                state.product?.forEach((item, i) => {
                    if(item.id === action.payload.id) {
                        goodInc = true;
                        state.product.splice(i, 1, {...item, qty: item.qty + 1})
                        
                    }
                })
                if(!goodInc) {
                    state.product.push(action.payload)
                }
            } else {
                state.product.push(action.payload)
            }
        },
        removeProduct: (state, action) => {
            state.product = state.product.filter(item => item.id !== action.payload.id)
        },
        openCart: state => {
            state.showModal = true;
        },
        closeCart: state => {
            state.showModal = false;
        }
    }
})

const { reducer, actions } = cartSlice;
export const { addProduct, removeProduct, openCart, closeCart } = actions;
export default reducer;