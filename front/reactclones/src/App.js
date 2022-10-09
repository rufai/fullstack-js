import logo from "./logo.svg";
import "./App.css";

import Beds from "./Beds";
import Bed from "./Bed";
import Kitchen from "./Kitchen"; // enter the kitchen
import Clones from "./Clones"; // open the clones door
import Person from "./Person";
import People from "./People";
import Hotels from "./Hotels";
import Increase from "./Increase";
import SaveTheWorld from "./SaveTheWorld";
import HowToPlay from "./HowToPlay";
// import Harper from "./Harper";
import { Harper, Styled } from "./Harper";
import {Example, MyInput } from "./Example";

// we are not using it

function App() {
  const morningFood = "plaintain and fried fish";
  const afternoonFood = "egusi soup with eba";
  return (
    <div className="App">
      <MyInput></MyInput>
      <Example></Example>
      <HowToPlay></HowToPlay>
      <SaveTheWorld></SaveTheWorld>
      <Increase></Increase>
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
