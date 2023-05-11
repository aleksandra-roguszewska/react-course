const UserList = ({ userArray }) => {
  return (
    <div>
      {userArray.map((item) => {
        return (
          <div key={item.username}>
            Name: {item.username} (Age: {item.age})
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
