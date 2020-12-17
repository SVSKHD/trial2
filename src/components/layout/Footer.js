import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Footer = (props) => {
  return (
    <div className="footergap">
      <Jumbotron className="Footer" fluid>
        <Container fluid>
          <h1 className="display-3">Taxi Now</h1>
          <p className="lead">Avail our services</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Footer;
