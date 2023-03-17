import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';

const columns = [
  { id: 'name', label: 'Email', minWidth: 170 },
  { id: 'status', label: 'Status', minWidth: 100 },
  { id: 'count', label: 'Quantity', minWidth: 100 },
  { id: 'amount', label: 'Amount', minWidth: 100 },
  { id: 'Date', label: 'Created At', minWidth: 100 },
  
];





export default function OrderTable({order}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {order
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row,index) => {
                return (
                  <TableRow style={{cursor:"pointer"}} onClick={()=>navigate(`/orderDetail/${row._id}`)} hover role="checkbox" tabIndex={-1} key={index}>
                    
                        <TableCell >
                          {row.orderby.email}
                        </TableCell>
                        <TableCell >
                          {row.orderStatus}
                        </TableCell>
                        <TableCell >
                        {row.products.reduce((accumulator, curValue) =>{
                            return accumulator + curValue.count},0)} 
                        </TableCell>
                        <TableCell >
                        {row.paymentIntent.amount} DT
                        </TableCell>
                        <TableCell >
                        {row.createdAt.split('').splice(0,10).join('')}
                        </TableCell>  
                                         
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={order.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}