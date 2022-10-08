function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
  avatarUrl:
    "https://images.unsplash.com/photo-1624383045192-cf512eb9d78c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
};

const Harper = function () {
  return (
    <section>
      <h1>Hello, {formatName(user)}!</h1>
      <img src={user.avatarUrl}></img>;
    </section>
  );
};

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const getGreetings = (user) =>
  user ? <h1>Hello, {formatName(user)}!</h1> : <h1>Hello, Stranger.</h1>;

function Styled() {
  const myStyle = {
    fontSize: 80,
    fontFamily: "Courier",
    color: "#003300",
  };
  return (
    <div>
      <h1 style={myStyle}> Davido and Olamide</h1>
    </div>
  );
}




// export default Harper;
export { Harper, Styled };
