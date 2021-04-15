import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      tel="+123 456 789"
      email="b@beyonce.com"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    />
    <Card
      name="Butts"
      tel="5555555555"
      email="joe@microsoft.com"
      img="https://www.gannett-cdn.com/-mm-/d45a1bc902cb3f4367b332e27f859c7252d4b7fa/c=0-109-2119-1306/local/-/media/2017/03/02/USATODAY/USATODAY/636240538720039138-GettyImages-509934328.jpg?width=3200&height=1680&fit=crop"
    />
  </div>,
  document.getElementById("root")
);
