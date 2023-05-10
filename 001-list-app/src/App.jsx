import { useState } from "react";
import UserForm from "./Components/UserForm/UserForm";
import UserList from "./Components/UserList/UserList";
import "./App.css";

function App() {
  const [userArray, setUserArray] = useState([]);

  const handleFormSubmit = (username, userAge) => {
    setUserArray((prevUserArray) => [
      ...prevUserArray,
      { age: userAge, username: username },
    ]);
    console.log(userArray);
  };

  return (
    <>
      <UserForm handleFormSubmit={handleFormSubmit} />
      <UserList userArray={userArray} />
    </>
  );
}

export default App;
