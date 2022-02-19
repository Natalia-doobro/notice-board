import React, { useState } from 'react';
import { FormGroup, Col, Label, Input, Button} from 'reactstrap';
import textCheckbox from './data.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function TabFour({data, prevTab}) {
  const [result, setResult] = useState('');

  const handleChange = async(e) => { 
    const { value, checked } = e.target;

    if (checked) {
      setResult(value);

      const obg = {
        subscription: value,
      };
      data(obg);
    }
  }

  return (
    <>   
      <FormGroup row tag="fieldset">
          <Label for="checkbox2" sm={2}>Subscription</Label>
        <Col sm={10} > 
          
            {textCheckbox.map(element => (
              <FormGroup check inline key={element.id}>
                    <Input 
                        id="checkbox2"
                        type="checkbox"
                        name="subscription"
                        value={element.text}
                        checked={result === element.text ? true : false}
                        onChange={handleChange}
                    />
                    {' '}
                <Label check>{element.text}</Label>
              </FormGroup>
            ))}
          </Col>
      </FormGroup>

      <Button color="warning" onClick={prevTab}>Prev</Button>    
    </>
  );
};

export default TabFour;