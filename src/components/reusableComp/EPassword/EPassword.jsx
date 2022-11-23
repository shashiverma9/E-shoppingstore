import React from 'react';
import {ReactComponent as Eye} from '../../../assests/svgs/Eye.svg'
import { InputGroup, FormControl, Form } from "react-bootstrap";

const EPassword = (props) => {

const { label,type,name, placeholder = "password", onInputChange, inputGrpCls="", qpswCls = "",qpswIconCls = "", errorMsg="", ...otherProps }=props;

const handleHideAndShow=(event)=>{
    console.log(event);
}
const handleOnChange=(event)=>{
    console.log(event);
}

  return (<div>    
        {label &&<Form.Label>{label}</Form.Label>}
        <InputGroup className={`mb-3 ${inputGrpCls}`}>
            <FormControl id="password" className={`${qpswCls}`}  type={type} placeholder={placeholder} onChange={handleOnChange} name={name} {...otherProps}/>
            <InputGroup.Append onClick={handleHideAndShow}>
                <InputGroup.Text><Eye className = {`${qpswIconCls}`}/></InputGroup.Text>
            </InputGroup.Append>
            {errorMsg ? <Form.Control.Feedback type="invalid">
            {errorMsg}
            </Form.Control.Feedback> : ""}
        </InputGroup>
    </div>
  )
}

export default EPassword;