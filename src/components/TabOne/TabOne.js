import React from 'react';
import { FormGroup, Col, Label, Input, Button, FormText } from 'reactstrap';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function TabOne({data, nextTab}) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [status, setStatus] = useState('');

  const [onChecked, setOnChecked] = useState(false);
  const [offChecked, setOffChecked] = useState(false);

  const [requiredField, setRequiredField] = useState(false);
  const [nextButton, setNextButton] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "title":
        setTitle(value);
        break;

      case "text":
        setText(value);
        break;  

      default:
        return;
    }
  };

  const handleChecked = (e) => {
    const { name, value } = e.target;

    if (name === "statusOn") {
      setOnChecked(true);
      setOffChecked(false);
      setStatus(value)
    } else {
      setOnChecked(false);
      setOffChecked(true);
      setStatus(value)
    }
  }

  const handleData = (evt) => {
    const obg = {
      title: title,
      text: text,
      status: status,
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
        <Label for="titleAd" sm={2}>Headline</Label>
              
        <Col sm={10}>
          
            <Input
              id="titleAd"
              name="title"
              type="text"
              value={title}
              onChange={handleChange}
              onBlur={blurChange}
              placeholder="Введите заголовок своего объявления"
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
        <Label for="exampleText" sm={2}>Description</Label>
              
        <Col sm={10}>
            <Input
                id="exampleText"
                name="text"
                type="textarea"
                value={text}
                onChange={handleChange}
            />
        </Col>
    </FormGroup>

    <FormGroup row tag="fieldset">
        <Label for="checkbox1" sm={2}>Status</Label>
        <Col sm={{size: 1}} >

          <FormGroup check inline>
                <Input 
                  id="checkbox1"
                  type="checkbox"
                  name="statusOn"
                  value="on"
                  checked={onChecked}
                  onChange={handleChecked}
                />
                {' '}
              <Label check>on</Label>
          </FormGroup>

          <FormGroup check inline>
                <Input 
                  id="checkbox1"
                  type="checkbox"
                  name="statusOff"
                  value="off"
                  checked={offChecked}
                  onChange={handleChecked}
                />
                {' '}
              <Label check>off</Label>
          </FormGroup>
                  
        </Col>
    </FormGroup>

      <Button
        color="success"
        disabled={nextButton ? false : true}
        onClick={() => { nextTab(); handleData() }}
      >
        Next
      </Button>   
  </>
  );
};

export default TabOne;