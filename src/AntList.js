import React from "react";

import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:3000/users`).then((res) => {
      const persons = res.data;
      console.table(persons);
      this.setState({ persons });
      console.log("i am here 3");
      console.log(persons[0]);
    });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <li>
            {" "}
            {person.user.username} details
            <ul>
              {" "}
              <li>Email : {person.user.Email}</li>
              <li> DOB : {person.user.Birthday}</li>
              <li>Father's name : {person.user.Fathersname}</li>
              <li> Mother's name : {person.user.Mothersname}</li>
              <li> Age : {person.user.Age}</li>
              <li> Department : {person.user.Department}</li>
              <li>Gender: {person.user.Gender}</li>
              <li> Address : {person.user.Address}</li>
              <li> Pincode : {person.user.pincode}</li>
            </ul>
          </li>
        ))}
      </ul>
    );
  }
}
