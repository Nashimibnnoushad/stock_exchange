import React from "react";
import { Container,  Card, CardHeader, CardBody } from "reactstrap";
import '../styles/app.css';

class Card1 extends React.Component {


  render() {
    return (
      <>
        <Container>
            <Card>
              <CardHeader>{this.props.data.date}</CardHeader>
              <CardBody>
                Open  : {this.props.data.open} <br/>
                High  : {this.props.data.high} <br/>
                Low   : {this.props.data.low} <br/>
                Close : {this.props.data.close} 
              </CardBody>
            </Card>
        </Container>
      </>
    );
  }
}

export default Card1;
