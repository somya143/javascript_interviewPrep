import "./App.css";
import { UserRow } from "./components/UserRow";
import React from "react";

function App() {
  const [formData , setFormData] = React.useState("");
const [userData , setUserData] = React.useState([]);

let handleChange = (e) => {
  let {type , name , value , checked} = e.target;
  let inputValue = type === "checkbox"? checked : value
  setFormData({...formData , [name] : inputValue})
}

let handleSubmit = (e) => {
  e.preventDefault();
  setUserData([...userData , formData])
}

const { name , gender , role, maritialStatus } = formData
  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        <div className="form-wrapper" data-testid="form-wrapper">
          <form data-testid="form-element" onSubmit={handleSubmit}>
            <div className="name-wrapper" data-testid="name-wrapper">
              <label>Name</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input type="text" placeholder="Name" name="name" value={name} onChange={handleChange} />
            </div>
            <div className="gender-wrapper" data-testid="gender-wrapper">
              <label>Gender</label>
              <select name="gender" value={gender} onChange={handleChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>
            <div className="role-wrapper" data-testid="role-wrapper">
              <label>Role</label>
              <select name="role" value={role} onChange={handleChange}>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
              </select>
            </div>
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper"
            >
              <legend>Martial Status</legend>
              <div>
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <input type={"checkbox"} name="maritialStatus" checked={maritialStatus} id="maritial" onChange={handleChange} />
                <label>Married</label>
              </div>
            </div>
            <div>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
      {/* map through the userdata and render UserRow component to display the data in tabular format */}
      {/* print "no users found"  in there is no user data */}
      <table style={{width: "100%"}}>
       <thead>
        <tr>
          
          <th>Name</th>
          <th>Gender</th>
          <th>Role</th>
          <th>Maritial Status</th>
        </tr>
       </thead>
       <tbody>
       {
        userData?(userData.map((el) => (
          <UserRow
          key={el.id}
          id={el.id}
          name={el.name}
          gender={el.gender}
          role={el.role}
          maritialStatus={el.maritialStatus}
          />
        ))) :
        (<h2>no user found</h2>)
      }
       </tbody>
      </table>
      
    </div>
  );
}

export default App;
