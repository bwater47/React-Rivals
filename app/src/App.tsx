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

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibilty] = useState(false);

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
      <Like />
      <Message />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button onClick={() => setAlertVisibilty(true)}>My Button</Button>
    </>
  );
}

export default App;
