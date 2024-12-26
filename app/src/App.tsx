// React
import { useState } from "react";
// Components
import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import Like from "./components/Like";
// CSS styles
import { BsFillCalendarFill } from "react-icons/bs";
// Boilerplate global css styles
import "./App.css";
// App function for static front end.
function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const [tags, setTags] = useState(["Tag 1", "Tag 2"]);

  // useState array.
  const [drink, setDrink] = useState({
    title: "americano",
    price: 5,
  });

  const [alertVisible, setAlertVisibilty] = useState(false);

  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 94111,
    },
  });

  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleTag = () => {
    // Add tags
    setTags([...tags, "Tag 3"]);
    // Remove tags
    setTags(tags.filter((tag) => tag !== "Tag 1"));
    // Update tags
    setTags(tags.map((tag) => (tag === "Tag 1" ? "Tag 3" : tag)));
  };

  const handleDrink = () => {
    setDrink({ ...drink, price: drink.price + 5 });
  };

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleZip = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 12345 },
    });
  };

  const handleBug = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <>
      <div>
        {/*inline styling*/}
        <BsFillCalendarFill color="red" size="40" />
      </div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibilty(false)}>
          <span>My Alert</span>
        </Alert>
      )}
      <Like onClick={() => console.log("clicked")} />
      <Message />
      <div>
        {drink.price}
        <button onClick={handleDrink}></button>
      </div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button onClick={() => setAlertVisibilty(true)}>My Button</Button>
      <div>
        {customer.name} - {customer.address.city} - {customer.address.zipCode}
        <button onClick={handleZip}>UPDATE ZIP</button>
      </div>
      <div>
        {tags.map((tag, index) => (
          <div key={index}>{tag}</div>
        ))}
        <button
          className="btn btn-outline-info btn-lg"
          onClick={handleTag}
        >Tag me!</button>
      </div>
      <div>
        {bugs.map((bug, index) => (
          <div key={index}>
            {bug.id} - {bug.title} - {bug.fixed ? "Fixed" : "Not Fixed"}
          </div>
        ))}
        <button
          className="btn btn-outline-warning btn-lg"
          onClick={handleBug}
        >Fix me!</button>
      </div>
    </>
  );
}

export default App;
