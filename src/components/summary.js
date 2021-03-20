import React from "react";
import { Container, Card, CardHeader, CardBody } from "reactstrap";
import '../styles/app.css';

class Summary extends React.Component {


    render() {
        return (
            <>
                <Container>
                    <Card>
                        <CardHeader>Summary</CardHeader>
                        <CardBody>
                            {this.props.data1.open > this.props.data2.open &&
                                <p>{this.props.data1.date} Open value was greater than {this.props.data2.date}</p>
                            }
                            {this.props.data1.open < this.props.data2.open &&
                                <p>{this.props.data1.date} Open value was lesser than {this.props.data2.date}</p>
                            }
                            {this.props.data1.open === this.props.data2.open &&
                                <p>{this.props.data1.date} Open value was equal to {this.props.data2.date}</p>
                            }

                            {this.props.data1.close > this.props.data2.close &&
                                <p>{this.props.data1.date} Close value was greater than {this.props.data2.date}</p>
                            }
                            {this.props.data1.close < this.props.data2.close &&
                                <p>{this.props.data1.date} Close value was lesser than {this.props.data2.date}</p>
                            }
                            {this.props.data1.close === this.props.data2.close &&
                                <p>{this.props.data1.date} Close value was equal to {this.props.data2.date}</p>
                            }

                            {this.props.data1.high > this.props.data2.high &&
                                <p>{this.props.data1.date} High value was greater than {this.props.data2.date}</p>
                            }
                            {this.props.data1.high < this.props.data2.high &&
                                <p>{this.props.data1.date} High value was lesser than {this.props.data2.date}</p>
                            }
                            {this.props.data1.high === this.props.data2.high &&
                                <p>{this.props.data1.date} High value was equal to {this.props.data2.date}</p>
                            }

                            {this.props.data1.low > this.props.data2.low &&
                                <p>{this.props.data1.date} Low value was greater than {this.props.data2.date}</p>
                            }
                            {this.props.data1.low < this.props.data2.low &&
                                <p>{this.props.data1.date} Low value was lesser than {this.props.data2.date}</p>
                            }
                            {this.props.data1.low === this.props.data2.low &&
                                <p>{this.props.data1.date} Low value was equal to {this.props.data2.date}</p>
                            }
                        </CardBody>
                    </Card>
                </Container>
            </>
        );
    }
}

export default Summary;
