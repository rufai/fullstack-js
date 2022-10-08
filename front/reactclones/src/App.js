import logo from "./logo.svg";
import "./App.css";

import Beds from "./Beds";
import Bed from "./Bed";
import Kitchen from "./Kitchen"; // enter the kitchen
import Clones from "./Clones"; // open the clones door
import Person from "./Person";
import People from "./People";
import Hotels from "./Hotels";
// import Harper from "./Harper";
import { Harper, Styled } from "./Harper";

// we are not using it

function App() {
  const morningFood = "plaintain and fried fish";
  const afternoonFood = "egusi soup with eba";
  return (
    <div className="App">
      <Clones></Clones>
      <Kitchen breakfast={morningFood} lunch={afternoonFood}></Kitchen>
      <Bed></Bed>
      <Harper></Harper>
      {/* <People></People> */}
      <People></People>
      {/* <Person></Person> */}
      {/*<Person></Person>
      <Person></Person> */}
      <Beds></Beds>
      <Hotels></Hotels>
    </div>
  );
}

export default App;
