import React from 'react';
import { Card, CardTitle, CardText} from 'reactstrap';

const Cardx = ({title,body,Time}) => {
  return(
        <Card body>
          <CardTitle className="display-4" tag="h5"><b>{title}</b></CardTitle>
          <CardText className="display-4">{body} {Time}</CardText>
          
        </Card>
)
}
export default Cardx