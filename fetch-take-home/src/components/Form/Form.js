import React, { useState } from "react";
import "../../styles/Form.css";

function Form() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    occupation: "",
    state: "",
  });

  const { name, email, password, occupation, state } = values;

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  const testSubmit = (data) => {
    console.log("formData", data);
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values });
    testSubmit(values);
  };

  return (
    <div className="form">
      <form onSubmit={clickSubmit} className="form">
        <div className="form__field">
          <label>Name:</label>
          <input
            required
            type="text"
            name="name"
            value={name}
            onChange={handleChange("name")}
          />
        </div>
        <div className="form__field">
          <label>Email:</label>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={handleChange("email")}
          />
        </div>
        <div className="form__field">
          <label>Password:</label>
          <input
            required
            type="password"
            name="text"
            value={password}
            onChange={handleChange("password")}
          />
        </div>
        <div className="form__field">
          <label>Occupation:</label>
          <input
            required
            type="text"
            name="occupation"
            value={occupation}
            onChange={handleChange("occupation")}
          />
        </div>
        <div className="form__field">
          <label>State:</label>
          <input
            required
            type="text"
            name="state"
            value={state}
            onChange={handleChange("state")}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
