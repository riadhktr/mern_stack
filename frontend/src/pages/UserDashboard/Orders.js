import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AllOrder } from '../../api/UserApi';
import NavbarUser from '../../components/NavbarUser'
import OrderDetail from '../../components/OrderDetail';
import { getLocalStorage } from '../../helpers/localStorage';
import { setOrder } from '../../store/OrderSlice';

const Orders = () => {
  const orders = useSelector((state)=>state.order.allOrders);
  console.log('orders',orders);
  const dispatch = useDispatch()

  const OrderList = async()=>{
    await AllOrder().then((response)=>{
      // console.log('res',response);
      dispatch(setOrder(response))
    }).catch((err)=>{
      console.log(err);
    })
  }

useEffect(()=>{
OrderList()
  },[])
  const user = getLocalStorage('user')
  console.log(user);
  const filtred = orders.filter((item)=>item.orderby._id === user._id);
  console.log('filtred',filtred);


  return (
    <div>
        <NavbarUser/>
        <h1 style={{textAlign:"center"}}>Orders</h1>
        <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
          {filtred.map((item)=>{
            return(<div key={item._id}>
                 <OrderDetail orders={item} />
                </div>) 
            
          })} 
        </div>
    </div>
  )
}

export default Orders