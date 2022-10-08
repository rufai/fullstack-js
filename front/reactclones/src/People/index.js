import Person from "../Person";

const customers = require("../data/customers.json");

function givePeople() {
  return customers.slice(1,20).map((item) => (
    <Person p={item} key={`${item.id}/${item.company}`} />
  ));
}

function People() {
  return <section>{givePeople()}</section>;
}

export default People;
