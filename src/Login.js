import { useEffect} from "react";
import {useHistory} from "react-router-dom"; 

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Login () {
    const Name="omkar"
    const Password="1234"
   var a=false;
   var b=false;

      
    function getName(name)
    {
        if(name.target.value===Name)
            a=true;
        else
            a=false;
    } 

       function getPassword(Pass)
       {
           if(Pass.target.value===Password)
              b=true;
              else
              b=false;
       } 
       
       let history=useHistory();
       

       function check ()
       {
           if(a===true && b===true)
           { 
             history.push("/home")
           }
          
            if(a===false)
           document.getElementById("checkmail").innerHTML = "Please enter valid Email..";
            if(b===false)
           document.getElementById("checkpassword").innerHTML = "Pleaes enter valid Password..";
       }

    return (
        <div>
           <h2>Login</h2>
           <TextField   onChange={getName}  type="text" id="outlined-basic" label="Name" variant="outlined" /><br></br>
            <span id="checkmail"   style={{fontSize:15, color:'red'}}  ></span><br></br>
            <TextField   onChange={getPassword}  type="password" id="outlined-basic" label="Password" variant="outlined" /><br></br>
            <span id="checkpassword" style={{fontSize:15,color:'red'}}></span><br></br>
            <Button onClick={check} color="primary" variant="contained" >Submit</Button>
        </div>
    )
}

export default Login 