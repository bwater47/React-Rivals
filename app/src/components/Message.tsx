// Basic function that returns an h1 if there is a name or return hello, user.
function Message() {
  const name = "Brennan";
  if (name) return <h1>Hello, {name}</h1>;
  return <h1>Hello, User</h1>;
}
export default Message;
