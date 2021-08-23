
import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router";
import {loginEndpoint, signupEndpoint} from '../services/auth-ws';

function SignUp () {
    const [data,setData] = useState({})
    const history = useHistory();
    const handleChange = (e)=>{
      setData({...data,[e.target.name]:e.target.value })
    }
  
    const onSubmit = (e) => {
      e.preventDefault()
      /*
      axios.post("http://localhost:3001/api/users",formData)
      .then(response=> console.log("la respuesta",response))
      .catch(error=> console.log("la error",error))
      */
      signupEndpoint(data)
        .then( res => {
            res.data.result.password = "no sea chismoso"
            localStorage.setItem("data",JSON.stringify(res.data.result))
            history.push('/login')
        })
        .catch()
    }

    return (
        <form onSubmit={onSubmit} style={{
            display:'flex',
            flexDirection:'column'
          }}>
    
            <input placeholder="Username" type="text" name="username" onChange={handleChange}/>
            <input placeholder="password" type="text" name="password" onChange={handleChange}/>
            <button>sign up</button>
        </form>
    )
}

export default SignUp