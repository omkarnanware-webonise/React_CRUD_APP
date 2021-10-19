import React ,{useEffect} from "react";

import { useDispatch,useSelector } from "react-redux";
import { deleteUsers, loadUsers } from "../redux/actions";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import {useHistory} from "react-router-dom";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
    //   backgroundColor: theme.palette.common.black,
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  

const Home = () => {
    let dispatch = useDispatch();

    const {users} = useSelector(state => state.data)


    useEffect (() =>  {
        dispatch(loadUsers());
    },[]);

    let history = useHistory();


  const deleteData = (id) => {

    if(window.confirm("Are you sure you want to delete ?")) {
        dispatch(deleteUsers(id));
    }
  };
  
    return (
        <div>
            <h2>TODOS</h2>
            <div >
            <Button onClick={() => history.push("/home/addUser")} style={{marginTop:"10px"}} color="primary" variant="contained" >Add User</Button>
            </div>
           
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 },{marginTop:5}} aria-label="customized table">
        <TableHead>
          <TableRow >
            {/* <StyledTableCell>id</StyledTableCell> */}
            <StyledTableCell align="center" style={{fontSize:20}}>Name</StyledTableCell>
            <StyledTableCell align="center" style={{fontSize:20}}>Address</StyledTableCell>
            <StyledTableCell align="center"style={{fontSize:20}}>Contact</StyledTableCell>
            <StyledTableCell align="center"style={{fontSize:20}}>Todos</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((user) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell  align="center" component="th" scope="row">
                {user.name}
              </StyledTableCell>
              <StyledTableCell align="center">{user.address}</StyledTableCell>
              <StyledTableCell align="center">{user.contact}</StyledTableCell>
              <StyledTableCell align="center">
              <ButtonGroup disableElevation variant="contained">
                <Button  style={{marginRight:"5px"}} onClick={() => history.push(`/home/editUser/${user.id}`)}>Edit</Button>
                <Button onClick={() => deleteData(user.id)}>Delete</Button>
                 </ButtonGroup>
                 </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default Home