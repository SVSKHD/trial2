import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import {FaGopuram} from "react-icons/fa"

const Toggle = ({body}) => (
  <div>
    <Button size="sm" color="dark" id="toggler" style={{ marginBottom: '1rem' }}>
      <FaGopuram size={30}/>
    </Button>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody>
          {body}
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
);

export default Toggle;
