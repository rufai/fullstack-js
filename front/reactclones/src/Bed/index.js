import Kitchen from "../Kitchen"; // enter the kitchen from the bed
import Toilet from "../Toilet";

import "./style.css"

function Bed() {
  return (
    <div>
      Bed
      <section id="bed">
        <img src="./bed.jpg" alt="Queen Chindinma's Bed" />
        <span> Queen Chindinma's Bed</span>
        <p>
          A king size bed is generally 72 inches(1.8 m) in width and 72 to 78
          inches (1.83m to 1.98m) in length, whereas the dimensions of a queen
          size beds is roughly 60 or 66 inches(1.52m or 1.68 m) in width and 72
          to 75 inches (1.83m to 1.91m) in length.
        </p>
      </section>
    </div>
  );
}

export default Bed; // door
