import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AllOrder } from '../../api/UserApi'
import OrderTable from '../../components/Admin/OrderTable'
import SideBar from '../../components/Admin/SideBar'
import { setOrder } from '../../store/OrderSlice'

const OrdersList = () => {
  const orders = useSelector(state=>state.order.allOrders)
  console.log('orders',orders);
  const dispatch = useDispatch();

  const OrderList = async()=>{
    await AllOrder().then((response)=>{
        console.log(response);
        dispatch(setOrder(response))
    }).catch((err)=>{
        console.log(err);
    })
  }

  useEffect(()=>{
  OrderList()
  },[])
  return (
    <div>
        <SideBar/>
        <div style={{display:"flex",justifyContent:"space-around"}}>
        <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
             <h1>Order List</h1> 
             <OrderTable order={orders}/>  
            </div>
        </div>
    </div>
  )
}

export default OrdersList