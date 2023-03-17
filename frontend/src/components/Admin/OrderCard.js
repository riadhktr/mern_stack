import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
export default function OrderCard({item}) {
  
  return (
    <Card sx={{ maxWidth: 445 }}>
      <CardHeader
        avatar={
          <IconButton aria-label="cart">
          <StyledBadge badgeContent={item.count} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.product.bookName}
        subheader= {item.product.bookAuthor}

      />
      <CardMedia
        component="img"
        height="224"
        image={`/Public/books/${item.product.bookImage}`}
        alt="Paella dish"
      />
      
    </Card>
  );
}