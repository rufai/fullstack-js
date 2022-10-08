import Kitchen from "../Kitchen"; // enter the kitchen from the bed
import Toilet from "../Toilet";

import "./style.css";

function formatName(name) {
  const tempName = name;
  return tempName.toUpperCase();
}

function Bed() {
  const description = {
    name: "Chinonso",
    age: 45,
    darlinton: " Onyido",
    bed_size: `A king size bed is generally 72 inches(1.8 m) in width and 72 to 78
    inches (1.83m to 1.98m) in length, whereas the dimensions of a queen
    size beds is roughly 60 or 66 inches(1.52m or 1.68 m) in width and 72
    to 75 inches (1.83m to 1.91m) in length.`,
  };

  return (
    <div>
      Bed
      <section id="bed">
        <img src="./bed.jpg" alt="Queen Chindinma's Bed" />
        <span> </span>
        <p>{description.bed_size}</p>
        <p>{description.name}</p>
        <p>name</p>
        <p>{description.age}</p>
        <p>{description.darlinton}</p>
        <p>darlinton</p>
      </section>
    </div>
  );
}

export default Bed; // door
