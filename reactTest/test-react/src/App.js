import logo from "./logo.svg";
import "./App.css";
import DataList from "./components/DataList";
import TestUaeRef from "./components/UaeRef";
import MyuseReducer from "./components/MyuseReducer";

function App() {
  const data = [
    { name: "Daniel", age: 25 },
    { name: "John", age: 24 },
    { name: "Jen", age: 31 },
  ];
  return (
    <>
      {/* <DataList data={ data } /> */}
      {/* <TestUaeRef/> */}
      <MyuseReducer/>
    </>
  );
}

export default App;
