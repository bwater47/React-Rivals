// Components
import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
// Boilerplate global css styles
import "./App.css";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <Alert>
        <span>Hello World</span>
      </Alert>
      <Message />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
