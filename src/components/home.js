import React from "react";
import { Container, Row, Col, FormGroup, Label, Button, Form } from "reactstrap";
import '../styles/app.css';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import "react-datepicker/dist/react-datepicker.css";
import Card1 from './card1'
import Card2 from './card2'
import Summary from './summary'
import { connect } from "react-redux"
import { getExchange1List, getExchange2List } from '../redux/actions/index'

class Home extends React.Component {
    state = {
        date1: new Date("2000/01/5"),
        date2: new Date("2000/01/6")
    }

    formatDate(date) {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        var trimmedday = day.replace(/\b0+/g, "")
        var monthchar = monthNames[d.getMonth()]
        var date = [trimmedday, monthchar, year].join('-');
        return date
    }

    handleClick = () => {
        var date1 = this.formatDate(this.state.date1)
        var date2 = this.formatDate(this.state.date2)
        this.props.getExchange1List(date1)
        this.props.getExchange2List(date2)
    }


    render() {
        return (
            <>
                <Container>
                    <h1 className="header">Stock Exchange</h1>
                    <Form>
                        <Row>
                            <Col md="6">
                                <FormGroup md="6" id="date1">
                                    <Label>Date 1</Label>
                                    <Flatpickr
                                        className="form-control"
                                        value={this.state.date1}
                                        options={{
                                            altInput: true,
                                            altFormat: "F j, Y",
                                            dateFormat: "Y-m-d",
                                        }}
                                        onChange={date => {
                                            this.setState({ date1: date });
                                        }}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup md="6" id="date2">
                                    <Label>Date 2</Label>
                                    <Flatpickr
                                        className="form-control"
                                        value={this.state.date2}
                                        options={{
                                            altInput: true,
                                            altFormat: "F j, Y",
                                            dateFormat: "Y-m-d",
                                        }}
                                        onChange={date => {
                                            this.setState({ date2: date });
                                        }}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className="center">
                            <Button color="primary" onClick={() => this.handleClick()}>Submit</Button>
                        </Row>
                    </Form>

                    <Row>
                        {/* Card 1 */}
                        <Col md="6">
                            {this.props.ExchangeList && this.props.ExchangeList.exchangeList1 && this.props.ExchangeList.exchangeList1.length !== 0 &&
                                <Card1
                                    data={this.props.ExchangeList.exchangeList1[0]}
                                ></Card1>
                            }
                        </Col>
                        {/* card 2 */}
                        <Col md="6">
                            {this.props.ExchangeList && this.props.ExchangeList.exchangeList2 && this.props.ExchangeList.exchangeList2.length !== 0 &&
                                <Card2
                                    data={this.props.ExchangeList.exchangeList2[0]}
                                >
                                </Card2>
                            }
                        </Col>
                        {/* Summary */}
                        <Col md="12">
                            {this.props.ExchangeList && this.props.ExchangeList.exchangeList1 && this.props.ExchangeList.exchangeList1.length !== 0 &&
                                <Summary
                                    data1={this.props.ExchangeList.exchangeList1[0]}
                                    data2={this.props.ExchangeList.exchangeList2[0]}
                                ></Summary>
                            }
                        </Col>

                    </Row>
                    {/* Empty Data */}
                    <Row className="center">
                        {this.props.ExchangeList && this.props.ExchangeList.exchangeList1 && this.props.ExchangeList.exchangeList1.length === 0 &&
                            <h6 className="card">There are no records to display</h6>
                        }
                    </Row>

                </Container>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        ExchangeList: state.ExchangeList
    }
}

export default connect(mapStateToProps, {
    getExchange1List, getExchange2List
})(Home)