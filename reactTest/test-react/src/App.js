import logo from "./logo.svg";
import "./App.css";
import DataList from "./components/DataList";

function App() {
  const data = [
    { name: "Daniel", age: 25 },
    { name: "John", age: 24 },
    { name: "Jen", age: 31 },
  ];
  return (
    <>
      <DataList data={ data } />
    </>
  );
}

export default App;
