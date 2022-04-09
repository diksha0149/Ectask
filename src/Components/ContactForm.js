import React, { Component } from 'react'
import "./Login.css"
import axios from 'axios'
import { useEffect, useState } from "react";
class ContactForm extends Component {
  // state={
  //   JobStatus:''
  // }
state = {
  users: []
}

componentDidMount() {

   fetch('https://reqbin.com/echo/get/json', {
    headers: {Authentication: 'v3p42mqQDWrg9j4gvbTrxT808n30vr5483'}
  }) .then((response) => response.json())
  .then(json => console.log(json))
  .then(usersList => {
      this.setState({ users: usersList });
  });
}
  constructor(props) {
    super(props)
    this.state = {
      Name: '',
      Address: '',
      Email: '',
      JobStatus: 'Student',
      DoLiketoCode: false,
      Secret:'c324sde45'
    }
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post("https://intern-api.engineerscradle.com/api/ft/task1/add", this.state)
      .then(response => {
        console.log('success')
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { Name, Address, Email, JobStatus, DoLiketoCode } = this.state

    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div className="field">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="Name" className="in" value={Name} onChange={this.changeHandler} required />
          </div>
          <div className="field">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="Address" className="in" value={Address} onChange={this.changeHandler} required />
          </div>
          <div className="field">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="Email" className="in" value={Email} onChange={this.changeHandler} required />
          </div>
          <div className="field">
            <label htmlFor="JobStatus">JobStatus:</label>
            <select className="in" onChange={(e)=>{
              this.setState({JobStatus: e.target.value})
            }}>
              <option name="JobStatus" value={JobStatus}>Student</option>
              <option name="JobStatus" value={JobStatus}>Unemployed</option>
              <option name="JobStatus" value={JobStatus}>Working</option>
              <option name="JobStatus" value={JobStatus}>Retired</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="DoLiketoCode">DoLiketoCode:</label>
            <div className="in">
              <input type="radio" name="answer" value={DoLiketoCode} onChange={this.changeHandler} /> Yes
              <input type="radio" name="answer" value={DoLiketoCode} onChange={this.changeHandler} /> No
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div>
        <ul>
                {/* {this.state.users.map((user) => (
                    <li>abcs</li>
                ))} */}
            </ul>

        </div>
      </div>
    )
  }
}
export default ContactForm












