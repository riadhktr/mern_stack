import React, { useEffect} from 'react'
import SideBar from '../../components/Admin/SideBar'
import { OrderbyId } from '../../api/UserApi';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderbyId} from '../../store/OrderSlice';
import OrderCard from '../../components/Admin/OrderCard';
import OrderHeader from '../../components/Admin/OrderHeader';





const OrderDetail = () => {
    
  
 const order = useSelector((state)=>state.order.item)
 console.log(order);
 const dispatch = useDispatch();
    const {id} = useParams()
    
  
    const handleDetails = async()=>{
        await OrderbyId(id).then((response)=>{
            dispatch(getOrderbyId(response))
        
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
    handleDetails()
    },[])
  return (

    <div>
        <SideBar/>
        <div >
        <div style={{paddingBlock:50, display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
        {order.map((el,index)=>{
            return(
                <>
                <div key={el._id} style={{display:"flex",justifyContent:"center",marginBottom:50}}>
                <OrderHeader item={el}  />
                </div>
                <div  style={{display:"flex", justifyContent:"space-around",flexWrap:"wrap"}}>
                    {el.products.map((item,index)=>{
                        return(
                            <div  key={index}>
                            <OrderCard item={item} />
                            </div>
                        )
                    })}
                </div>
                </>
                // </div>
            )
        })}
        </div>
        </div>
   </div>
  )
}

export default OrderDetail

