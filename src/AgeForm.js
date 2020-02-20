import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { getCustomers } from "./actions/search";
import CustomersDetails from "./CustomersDetails";
import "bootstrap/dist/css/bootstrap.min.css";

export default class AgeForm extends Component {
  state = {
    fromAge: 0,
    toAge: 0,
    customers: []
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    getCustomers(this.state.fromAge, this.state.toAge).then(data => {
      this.setState({ customers: data });
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Age Range From</Form.Label>
                <Form.Control
                  type="integer"
                  placeholder="Starting age range"
                  name="fromAge"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Age Range To</Form.Label>
                <Form.Control
                  type="integer"
                  placeholder="Ending age range"
                  name="toAge"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <div className="col-lg-6">
            <CustomersDetails customers={this.state.customers} />
          </div>
        </div>
      </div>
    );
  }
}
