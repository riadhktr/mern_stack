import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './bookSlice';
import cartSlice from './cartSlice';
import userSlice from './userSlice';
import OrderSlice from './OrderSlice';

export default configureStore({
    reducer:{
        Book:bookSlice,
        Users: userSlice,
        allCart: cartSlice,
       
        order: OrderSlice
    }
})