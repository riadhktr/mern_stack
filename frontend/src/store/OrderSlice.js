import { createSlice } from "@reduxjs/toolkit";


const orderSlice = createSlice({
    name:"orders",
    initialState:{
        allOrders: [],
        item: [],
    },
    
    reducers:{
        setOrder:(state,action)=>{
            state.allOrders= action.payload
            return state
        },
        removeOrder:(state,action)=>{

            state.allOrders = state.allOrders.filter((order)=>order._id !== action.payload)
            return state
        },
        getOrderbyId:(state,action)=>{
            state.item = [action.payload];
            return state
        }
    }

})


export const {setOrder,removeOrder,getOrderbyId} = orderSlice.actions;
export default orderSlice.reducer