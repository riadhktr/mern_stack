import { getCookie } from "../helpers/cookies";
import axios from 'axios'

export const createCart = async(cart)=>{
    const token=getCookie('refreshToken');
      // console.log('token',token);
       
     const {data}=   await axios.post(`http://localhost:5008/users/cart`,{...cart},{headers:{
                
     'Authorization':token
     
 }})
        return data
}
export const emptyCart = async()=>{
  const token=getCookie('refreshToken');
    // console.log('token',token);
     
     await axios.delete(`http://localhost:5008/users/empty-cart`,{headers:{
              
   'Authorization':token
   
}})
      
}
export const createOrder = async(order)=>{
  const token=getCookie('refreshToken');
    // console.log('token',token);
     
   const {data}=   await axios.post(`http://localhost:5008/users/cart/cash-order`,order,{headers:{
              
   'Authorization':token
   
}})
      return data
}

export const AllOrder = async()=>{
  const token=getCookie('refreshToken');
    // console.log('token',token);
     
   const {data}=   await axios.get(`http://localhost:5008/users/getallorders`,{headers:{
              
   'Authorization':token
   
}})
      return data
}

export const OrderbyId = async(ID)=>{
  const token=getCookie('refreshToken');
    // console.log('token',token);
     
   const {data}=   await axios.get(`http://localhost:5008/users/getOrderById/${ID}`,{headers:{
              
   'Authorization':token
   
}})
      return data
}


