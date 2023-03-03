import {createSlice} from '@reduxjs/toolkit'


const bookSlice = createSlice({
    name:'books',
    initialState:[],
    reducers:{
        setBooks:(state,action)=>{
            return action.payload
        },
        
    }
})


export const {setBooks} = bookSlice.actions;
export default bookSlice.reducer