import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeOrder } from '../store/OrderSlice';




export default function OrderDetail({orders}) {
  const dispatch = useDispatch();

  const handleRemoveOrder =(Id)=>{
   dispatch(removeOrder(Id))
  }
    
    return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant="h5" component="div">
         {orders.orderby.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {(orders) ? `${orders.updatedAt.split('').splice(0,10).join("")}`: null}
        </Typography>
        <Typography variant="h5" component="div">
         {orders.orderStatus}
        </Typography>
        <Typography variant="h5" component="div">
         {orders.products.map((el,index)=>{
          return (
          <div key={index}>
            {el.product.bookName} 
            <span>{el.count}</span>
          </div> )
         })}
        </Typography>
        <Typography variant="h5" component="div">
         {orders.paymentIntent.amount} DT
        </Typography>
       <Button onClick={()=>handleRemoveOrder(orders._id)} variant='outlined'>Payement</Button>
      </CardContent>
      
    </Card>
  );
}