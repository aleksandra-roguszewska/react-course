import { useState } from "react";
import UserForm from "./Components/UserForm/UserForm";
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
      <div>Form - Username - Age(Years) Add user button</div>
      <div>UserList - user item -user item -user item</div>
    </>
  );
}

export default App;
