import React from 'react';
import { FormGroup, Col, Label, Input, Button, FormText} from 'reactstrap';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function TabTwo({data, nextTab, prevTab}) {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [requiredField, setRequiredField] = useState(false);
  const [nextButton, setNextButton] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "phone":
        setPhone(value);
        break;

      case "email":
        setEmail(value);
        break; 

      default:
        return;
    }
  };

  const handleData = (evt) => {
    const obg = {
      phone: phone,
      email: email,
    };
      
    data(obg);
  };

  const blurChange = e => {
    const { value } = e.target;

    if (value === '') {
      setRequiredField(true);
      setNextButton(false);
    } else {
      setRequiredField(false);
      setNextButton(true);
    }
  };


  return (
   <>   
    <FormGroup row>
        <Label for="phoneAd" sm={2}>Phone number</Label>
              
        <Col sm={10}>
            <Input
                id="phoneAd"
                name="phone"
                type="text"
                value={phone}
                onChange={handleChange}
                onBlur={blurChange}
                placeholder="+380 000 000 000"
                required
            />

            {requiredField &&
              (<FormText  color="danger">
                This field is required
              </FormText>)
            }
        </Col>
    </FormGroup>

    <FormGroup row>
        <Label for="emailAd" sm={2}>Email</Label>
              
        <Col sm={10}>
            <Input
                id="emailAd"
                name="email"
                type="text"
                value={email}
                onChange={handleChange}
                placeholder="something@gmail.com"
            />
        </Col>
    </FormGroup>  

    <Button color="warning" onClick={prevTab}>Prev</Button>
    <Button color="success" disabled={nextButton ? false : true} onClick={() => {nextTab(); handleData()}}>Next</Button>     
  </>
  );
};

export default TabTwo;