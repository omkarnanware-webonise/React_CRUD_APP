import React , {useState}from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useHistory} from "react-router-dom"; 
import {useDispatch} from "react-redux"
import { addUser } from "../redux/actions";

const AddUser = () => {

    const [state,setState]=useState({
        name:"",
        address:"",
        contact:"",
    });

    const [error,setError] = useState("");
    let dispatch=useDispatch();

    const handleSubmit =(e) => {
        e.preventDefault();
        if(!name || !address || !contact){
            // setError("Please fill all the fields");
            throw new Error("empty input"); 
        }
        else {
            dispatch(addUser(state));
            history.push("/home");
            setError("");
        }
    }
    let history=useHistory();

  

    

    const {name, address , contact} =state; 

    const InputChange =(e) => {
        let {name, value} =e.target;
        setState({...state,[name]:value});
    };

    
    return (
        <div>
            <h2>Add User</h2>
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
      <Button type="submit"  color="primary" variant="contained" style={{marginRight:"5px"}}>Submit</Button>
    <Button onClick={() =>history.push("/home") } color="primary" variant="contained" >Back</Button>
    </Box>
   
        </div>
    ) 
}

export default AddUser;