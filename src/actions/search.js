import request from "superagent";
/* 
export const SHOW_CUSTOMERS = "SHOW_CUSTOMERS";

export function showCustomers(custData) {
  return {
    type: SHOW_CUSTOMERS,
    custData
  };
} */

export function getCustomers(fromAge, toAge) {
  return request
    .get(`http://localhost:4000/search?fromAge=${fromAge}&toAge=${toAge}`)
    .then(response => response.body.hits.hits)
    .catch(err => console.log("Error in search"));
}
