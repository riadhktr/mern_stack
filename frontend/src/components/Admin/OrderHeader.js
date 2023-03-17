import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { UpdateOrder } from '../../api/AdminApi';
import {toast} from 'react-toastify'


export default function OrderHeader({item}) {
  
  const [status,setValue] = React.useState('')
  console.log(status);
  const generateError=(msg)=>{
    toast.error(msg,{position:"bottom-right"})
  }
  const generateSucess=(msg)=>{
    toast.success(msg,{position:"bottom-right"})
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleUpdateOrder = async()=>{
if(status){
await UpdateOrder(item._id,{status:status})
    .then((response)=>{
      console.log(response);
      generateSucess('Order updated with sucess')
    }).catch((err)=>{
      console.log(err);
    })
  }else{
    generateError('you must choose a status')
  }
  }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 28 }} color="text.secondary" gutterBottom>
          {item.updatedAt.split('').splice(0,10).join('')}
        </Typography>
        <Typography variant="h5" component="div">
          {item.orderStatus}
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="h5" color="text.secondary">
          {item.paymentIntent.amount} {item.paymentIntent.currency}
        </Typography>
        <Typography variant="h5"  >
          {item.orderby.email}
          <br />
          
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Status</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={status}
        label="status"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="Processing">Processing</MenuItem>
        <MenuItem value="Dispatched">Dispatched</MenuItem>
        <MenuItem value="Delivered">Delivered</MenuItem>
        <MenuItem value="Cancelled">Cancelled</MenuItem>
      </Select>
    </FormControl>
      </CardContent>
      <CardActions>
        <Button onClick={()=>handleUpdateOrder()} size="small" variant="outlined">Update status</Button>
      </CardActions>
    </Card>
  );
}