import Bed from "../Bed";

const customers = require("../data/customers.json");

const ages = [5, 6, 7, 8, 9, 3, 2, 1];

function giveBeds() {
  return customers.map((item) => <section><h1>{item.id}</h1><Bed></Bed></section>);
}

function Beds() {
  return <section>{giveBeds()}</section>;
}

export default Beds;
