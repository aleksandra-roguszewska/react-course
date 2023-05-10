import { useState } from "react";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [userAge, setUserAge] = useState(0);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    console.log(username);
  };

  const handleAgeChange = (event) => {
    setUserAge(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleFormSubmit(username, userAge);
    setUserAge(0);
    setUsername("");
    console.log(username);
  };

  return (
    <div>
      <form className="userform" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        ></input>
        <label htmlFor="age">Age(Years)</label>
        <input
          type="number"
          step="1"
          name="age"
          value={userAge}
          onChange={handleAgeChange}
        ></input>
        <button>Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
