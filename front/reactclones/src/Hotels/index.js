import Hotel from "../Hotel";
const hotels = require("../data/hotels.json");
const fake_store = require("../data/fake_commerce.json")

function Hotels() {
  return (
    <section>
      <h1>All The Hotels</h1>
      {/* {hotels.map( (item) => <h1>{item.brand_name}</h1>)} */}
      {fake_store.map( item => <Hotel data={item} key={item}></Hotel>)}
    </section>
  );
}

export default Hotels;
