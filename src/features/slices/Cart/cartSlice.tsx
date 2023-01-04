import React from 'react';
import  { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productApi } from '../../../api';

const initialState = {
    productSearch: {},
    result: {}
}

const productSearch = createAsyncThunk(
    'product/productSearch',
    async (_,{ rejectWithValue }) => {
        try {
            const res: any = await productApi.getProduct();
            return res.data
        } catch (err) {
            return rejectWithValue(err);
        }
    }
)


const cartSlice = createSlice(
    {
        name: 'productSearch',
        initialState,
        reducers: {
            search(state, action) {
                state.result = action.payload;
            }
        },
        extraReducers: (builder) => {
            builder.addCase(
                productSearch.fulfilled,
                (state, action) => {
                    state.productSearch = action.payload;
                }
            )
        }
    }
)

// actions
export { productSearch }
export const { search } = cartSlice.actions

// initialState
export default cartSlice.reducer