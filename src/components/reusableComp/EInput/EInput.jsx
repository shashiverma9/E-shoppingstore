import React from 'react';
import { useState } from 'react';
import { FormControl, FormLabel } from "react-bootstrap";

const EInput = (props) => {
  const {qinputCls="", value,onChange, label="", onInputChange,errorMsg="",type,name, ...otherProps} =props;

  // const [updatedValue, setUpdatedValue] = useState(value);

const onhandleChange=(event)=>{
  onChange(event)
}

  return (
    <div className='einputtext-wrapper'>
      {label && <FormLabel>{label}</FormLabel>}
        <FormControl type={type} className={qinputCls} name={name} autoComplete="off" value={value} onChange={onhandleChange} {...otherProps} />
        {errorMsg ? <FormControl.Feedback type="invalid">{errorMsg}</FormControl.Feedback> : null}    
        </div>
  )
}

export default EInput