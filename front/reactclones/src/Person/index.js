import Kitchen from "../Kitchen"; // enter the kitchen from the bed
import Toilet from "../Toilet";

import "./style.css";

function Person(props) {
  // console.log(props);
  
  return (
    <div>
      <section id="person">
        <span> {props.p.id} </span>
       
        <span>
          {" "}
          {props.p.first}
          {props.p.last}{" "}
        </span>
        <p>{props.p.company} </p>
        <p>{props.p.country} </p>
      </section>
    </div>
  );
}

export default Person; // door
