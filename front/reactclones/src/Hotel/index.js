import "./style.css";

function OldHotel() {
  return (
    <section id="hotel">
      <img
        src="https://t-cf.bstatic.com/xdata/images/hotel/square200/223561151.webp?k=61d9879aeb6583a46a1922e4e5d3f9566e16058e583046eb53831a140ef17804&o="
        alt=""
      />
      <section>
        <span id="name">
          {" "}
          <a href="">Hotels, Ikoyi</a>
        </span>
        <span>Country, Continent</span>
      </section>
      <span id="rating">8.2</span>
      <span id="pricing"> NGN 900000</span>
    </section>
  );
}

// https://www.amazon.com/s?k=godwin&crid=2851GTRUNX4ZL&sprefix=godwin%2Caps%2C350&ref=nb_sb_noss_2

// https://www.amazon.com/s?k=&ref=nb_sb_noss_1

// https://www.alibaba.com/trade/search?fsb=y&IndexArea=product_en&CatId=&tab=all&SearchText=&selectedTab=product_en
function Hotel(props) {
  return (
    <section id="hotel">
      <section>
        <img id="product" src={props.data.image} alt={props.data.title} />
        <span id="name">
       
          <a
          
            href={ `https://www.alibaba.com/trade/search?fsb=y&IndexArea=product_en&CatId=&tab=all&SearchText=${props.data.title}&selectedTab=product_en`}
            target="_blank"
          >
            {props.data.title}
          </a>
        </span>

        <span> {props.data.description}</span>
      </section>
      <span id="rating">{props.data.rating.rate}</span>
      <span id="pricing"> NGN {props.data.price}</span>
    </section>
  );
}

export default Hotel;
