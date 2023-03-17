import { getCookie } from "../helpers/cookies";
import axios from 'axios'

export const blockUser = async(id)=>{
    const token=getCookie('refreshToken');
    
       
     const {data}=   await axios.put(`http://localhost:5008/users/block-user/${id}`,{headers:{
                
     'Authorization':token
     
 }})
        return data
}
export const unblockUser = async(id)=>{
    const token=getCookie('refreshToken');
     
       
     const {data}=   await axios.put(`http://localhost:5008/users/unblock-user/${id}`,{headers:{
                
     'Authorization':token
     
 }})
        return data
}

export const deleteUser = async(id)=>{
  const token=getCookie('refreshToken');
  
     
   const {data} =  await axios.delete(`http://localhost:5008/users/${id}`,{headers:{
              
   'Authorization':token
   
}})

return data
      
}

// update order status 

export const UpdateOrder = async(ID,Status)=>{
   
    const token = getCookie('refreshToken');
    const {data} =  await axios.put(`http://localhost:5008/users/order/update-order/${ID}`,{...Status},{headers:{
              
   'Authorization':token
   
}})

return data


}