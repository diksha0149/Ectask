import React, { Component } from 'react'
import "./Login.css" 
import axios from 'axios'
 class ContactForm extends Component {
   constructor(props){
     super(props)
     this.state={
       name: '',
       address:'',
       email:'',
       jobstatus:'',
       like:''
     }
   }
   changeHandler=(e)=>{
     this.setState({[e.target.name]: e.target.value})
   }
   submitHandler= e =>{
     e.preventDefault()
     console.log(this.state)
     axios.post("https://intern-api.engineerscradle.com/", this.state)
     .then(response=>{
       console.log(response)
     })
     .catch(error =>{
       console.log(error)
     })
   }
  render() {
    const{name,address,email,jobstatus,like}=this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
        <div className="field">
         <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" className="in" value={name} onChange={this.changeHandler} required />
       </div>
       <div className="field">
         <label htmlFor="address">Address:</label>
         <input type="text" id="address" name="address" className="in" value={address} onChange={this.changeHandler} required />
       </div>
       <div className="field">
         <label htmlFor="email">Email:</label>
         <input type="email" id="email" name="email" className="in" value={email} onChange={this.changeHandler} required />
       </div>
       <div className="field">
         <label htmlFor="jobstatus">JobStatus:</label>
         <select className="in">
           <option name="jobstatus" value={jobstatus}>Student</option>
           <option name="jobstatus" value={jobstatus}>Unemployed</option>
           <option name="jobstatus" value={jobstatus}>Working</option>
           <option name="jobstatus" value={jobstatus}>Retired</option>
         </select>
       </div>
       <div className="field">
         <label htmlFor="like">DoLiketoCode:</label>
         <div className="in">
         <input type="radio" name="answer" value={like} onChange={this.changeHandler}/> Yes
         <input type="radio" name="answer" value={like} onChange={this.changeHandler}/> Not this time
         </div>
       </div>
       <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
export default ContactForm













// const ContactForm = () => {
//   const [status, setStatus] = useState("Submit");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");
//     const { name, email, address,jobstatus,like } = e.target.elements;
//     let details = {
//       name: name.value,
//       email: email.value,
//       address:address.value,
//       jobstatus:jobstatus.value,
//       like:like.value,
//     };
//     let response = await fetch("https://intern-api.engineerscradle.com/api/ft/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(details),
//     });
//     setStatus("Submit");
//     let result = await response.json();
//     alert(result.status);
//     console.log(result.status);
//   };
//   return (
//     <div className="contactform">
//     <form onSubmit={handleSubmit} >
//       <div className="field">
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" className="in" required />
//       </div>
//       <div className="field">
//         <label htmlFor="address">Address:</label>
//         <input type="text" id="address" className="in" required />
//       </div>
//       <div className="field">
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" className="in" required />
//       </div>
//       <div className="field">
//         <label htmlFor="jobstatus">JobStatus:</label>
//         <select className="in">
//           <option value="Student">Student</option>
//           <option value="Unemployed">Unemployed</option>
//           <option value="Working">Working</option>
//           <option value="Retired">Retired</option>
//         </select>
//       </div>
//       <div className="field">
//         <label htmlFor="like">DoLiketoCode:</label>
//         <div className="in">
//         <input type="radio" name="answer"/> Yes
//         <input type="radio" name="answer"/> Not this time
//         </div>
//       </div>
//       <button type="submit">{status}</button>
//     </form>
//     </div>
//   );
// };

// export default ContactForm;