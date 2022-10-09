import "./style.css"


function getChicken(){
    alert("Chidinma, buy us chicken.");
}

function Increase(){
    return (
        <section id="increase">
            <h1>I will increase</h1>
            <button onClick={getChicken}>go up</button>
        </section>
    )
}

export default Increase;