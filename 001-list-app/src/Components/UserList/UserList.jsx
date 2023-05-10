const UserList = ({ userArray }) => {
  return (
    <div>
      {userArray.map((item) => {
        return <div key={item.age}>{item.username}</div>;
      })}
    </div>
  );
};

export default UserList;
