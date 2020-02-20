import React from "react";
import { Table, Alert } from "react-bootstrap";

export default function CustomersDetails(props) {
  console.log(props.customers);
  if (props.customers.length === 0) {
    return <Alert>No customer data to display</Alert>;
  } else {
    return (
      <div>
        <h3>Customer Data</h3>
        <Table>
          <tbody>
            {props.customers.map(customer => {
              return (
                <tr key={customer._id}>
                  <td>{customer._source.account_number}</td>
                  <td>
                    {customer._source.firstname +
                      " " +
                      customer._source.lastname}
                  </td>
                  <td>{customer._source.age}</td>
                  <td>{customer._source.email}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
