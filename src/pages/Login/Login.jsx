import React, { useState } from 'react';
import EInput from '../../components/reusableComp/EInput';
import EPassword from '../../components/reusableComp/EPassword';

const Login = (props) => {

  const [user,setUser]=useState({})

  let name,value;
  const onChange=(event)=>{
    console.log(event.target.value);
   name=event.target.name;
   value=event.target.value
    setUser({...user,[name]:value})
  }

  console.log(user);
  return (<div>
     <EInput label="Email" name="email" value={user.email} type="text" onChange={onChange}/>
     <EInput label="password" name="password" value={user.password} type="password" onChange={onChange}/>
     {/* <EPassword type="password" label="Password" /> */}
    </div>
  )
}

export default Login;