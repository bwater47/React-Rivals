// React
import { useState } from "react";
// Components
import Message from "./components/Message";
import NavBar from "./components/NavBar";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import Like from "./components/Like";
// Packages
import { produce } from "immer";
// CSS styles
import { BsFillCalendarFill } from "react-icons/bs";
// Boilerplate global css styles
import "./App.css";
import Cart from "./components/Cart";
// App function for static front end.
function App() {
  // Shopping example
  const [shopping, setShopping] = useState({
    discount: 0.1,
    shoppingItems: [
      { id: 1, title: "Product1", quantity: 1 },
      { id: 2, title: "Product2", quantity: 2 },
    ],
  });
  // Cart example
  const [cartItems, setCartItems] = useState([
    "Product1",
    "Product2",
    "Product3",
  ]);

  // Game example
  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "Johnny Boy",
  //   },
  // });

  // Items example
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Tags example
  const [tags, setTags] = useState(["Tag 1", "Tag 2"]);

  // Drink example.
  const [drink, setDrink] = useState({
    title: "americano",
    price: 5,
  });

  // Alert example.
  const [alertVisible, setAlertVisibilty] = useState(false);

  // Customer example
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 94111,
    },
  });

  // Bug example
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  // Tag example
  const handleTag = () => {
    // Add tags
    setTags([...tags, "Tag 3"]);
    // Remove tags
    setTags(tags.filter((tag) => tag !== "Tag 1"));
    // Update tags
    setTags(tags.map((tag) => (tag === "Tag 1" ? "Tag 3" : tag)));
  };

  // Drink example.
  const handleDrink = () => {
    setDrink({ ...drink, price: drink.price + 5 });
  };

  // Handle items.
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  // Customer example
  const handleZip = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 12345 },
    });
  };

  // Bug example
  const handleBug = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  // Shopping example.
  const handleShopping = () => {
    produce((draft: typeof shopping.shoppingItems) => {
      const item = draft.find((item) => item.id === 1);
      if (item) item.quantity += 1;
    });
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
        <button className="btn btn-outline-info btn-lg" onClick={handleTag}>
          Tag me!
        </button>
      </div>
      <div>
        {/* Bug example */}
        {/* {bugs.map((bug, index) => (
          <div key={index}>
            {bug.id} - {bug.title} - {bug.fixed ? "Fixed" : "Not Fixed"}
          </div>
        ))} */}
        {bugs.map((bug) => (
          <p key={bug.id}>
            {bug.title} {bug.fixed ? "Fixed" : "Not Fixed"}
          </p>
        ))}
        <button className="btn btn-outline-warning btn-lg" onClick={handleBug}>
          Fix me!
        </button>
      </div>
      {/* Shopping Cart Example */}
      <div>
        <NavBar cartItemsCount={cartItems.length} />
        <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      </div>
    </>
  );
}

export default App;
