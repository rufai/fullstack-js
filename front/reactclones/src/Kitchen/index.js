function Kitchen(props) {
  console.log(props.breakfast );
  console.log(props.lunch );
  return (
    <section>
      <h1>Kitchen</h1>
      <section>Breakfast : {props.breakfast}</section>
      <section>Lunch : {props.lunch}</section>
    </section>
  );
}

export default Kitchen; // opening the door
