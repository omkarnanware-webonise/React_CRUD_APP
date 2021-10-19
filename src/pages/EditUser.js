import React , {useState,useEffect}from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useHistory,useParams} from "react-router-dom"; 
import {useDispatch,useSelector} from "react-redux"
import { addUser, getSingleUser, updateUser } from "../redux/actions";

const EditUser = () => {

    const [state,setState]=useState({
        name:"",
        address:"",
        contact:"",
    });

    const [error,setError] = useState("");
    let dispatch=useDispatch();
    let {id} =useParams();
    let history=useHistory();
    const {user} =useSelector((state) => state.data);

    const handleSubmit =(e) => {
        e.preventDefault();
        if(!name || !address || !contact){
            setError("Please fill all the fields");
        }
        else {
            dispatch(updateUser(state,id));
            history.push("/home");
            setError("");
        }

    }
    useEffect (() => {
        dispatch(getSingleUser(id))
    },[]);

    useEffect (() => {
        if(user) {
            setState({...user});
        }
    },[user]);

   
    const {name, address , contact} =state; 

    const InputChange =(e) => {
        let {name, value} =e.target;
        setState({...state,[name]:value});
    };

    
    return (
        <div>
            <h2>Update User</h2>
            {error && <h3 style={{color:"red"}}>{error}</h3>}
            <Box marginTop="100"
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField value={name} onChange={InputChange} name="name" type="text" id="outlined-basic" label="Name" variant="outlined" /><br></br>
      <TextField  value={address} onChange={InputChange} name="address" type="text" id="outlined-basic" label="Address" variant="outlined" /><br></br>
      <TextField value={contact} onChange={InputChange} name="contact" type="number" id="outlined-basic" label="Contact No" variant="outlined" /><br></br>
      <Button type="submit"  color="primary" variant="contained" style={{marginRight:"5px"}}>Update</Button>
    <Button onClick={() =>history.push("/home") } color="primary" variant="contained" >Back</Button>
    </Box>
   
        </div>
    ) 
}

export default EditUser;