import logo from "./logo.svg";
import "./App.css";

import Beds from "./Beds";
import Bed from "./Bed";
import Kitchen from "./Kitchen"; // enter the kitchen
import Clones from "./Clones"; // open the clones door
import Person from "./Person";
import People from "./People";
function App() {
  return (
    <div className="App">

      <Clones></Clones>

      <Kitchen></Kitchen>
      <Bed></Bed>
     {/* <People></People> */}
      {/* <People></People> */}
      {/* <Person></Person>
      <Person></Person>
      <Person></Person> */}
      {/* <Beds></Beds> */}
    </div>
    
  );
}

export default App;
