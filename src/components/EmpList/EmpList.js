import React, { Component } from "react";
import EmpDetails from "./EmpDetails.json";

export class EmpList extends Component {
  render() {
    const user = EmpDetails.user;
    return (
      <div>
        {user.map(user => {
          return (
            <ul>
              <li>Id: {user.id}</li>
              <li>Name: {user.name}</li>
              <li>Age: {user.age}</li>
              <li>Gender: {user.gender}</li>
              <li>Email: {user.email}</li>
              <li>PhoneNo: {user.PhoneNo}</li>
            </ul>
          );
        })}
        {/* {console.log("object", user)} */}
      </div>
    );
  }
}

export default EmpList;
