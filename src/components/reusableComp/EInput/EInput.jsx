import React from 'react';
import { useState } from 'react';
import { FormControl, FormLabel } from "react-bootstrap";

const EInput = (props) => {
  const {qinputCls="", value="", label="", onInputChange,errorMsg="",type, ...otherProps} =props;

  const [updatedValue, setUpdatedValue] = useState(value);

const onChange=(event)=>{
  console.log(event);
}

  return (
    <div className='einputtext-wrapper'>
      {label && <FormLabel>{label}</FormLabel>}
        <FormControl type={type} className={qinputCls} autoComplete="off" value={updatedValue} onChange={onChange} {...otherProps} />
        {errorMsg ? <FormControl.Feedback type="invalid">{errorMsg}</FormControl.Feedback> : null}    
        </div>
  )
}

export default EInput