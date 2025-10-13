import React, { useState } from "react";

const ControlledForm1 = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Creating new user
    let user = { username, email, password };
    console.log(user);

    // Get user from local storage or []
    let allUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Push new user to allUsers[]
    allUsers.push(user);

    console.log(allUsers);

    // Store allUsers in local
    localStorage.setItem("users", JSON.stringify(allUsers));

    // Clear input Field
    setUsername(""), setEmail(""), setPasswrod("");
  };

  return (
    <div>
      <h1>Controlled forms</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username :</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="email"> Email :</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /> <br />
        <label htmlFor="password">Password :</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPasswrod(e.target.value)}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ControlledForm1;
