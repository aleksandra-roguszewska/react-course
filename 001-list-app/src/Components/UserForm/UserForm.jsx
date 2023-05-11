import { useState } from "react";
import WrongEntryModal from "../WrongEntryModal/WrongEntryModal";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [userAge, setUserAge] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    console.log(username);
    setIsVisible(false);
  };

  const handleAgeChange = (event) => {
    setUserAge(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username == "" || userAge < 0) {
      console.log("Banan");
      setIsVisible(true);
      setUserAge(0);
      setUsername("");
      return;
    }
    props.handleFormSubmit(username, userAge);
    setUserAge(0);
    setUsername("");
    console.log(username);
  };

  const escapeModal = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible ? <WrongEntryModal escapeModal={escapeModal} /> : ""}
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
    </>
  );
};

export default UserForm;
