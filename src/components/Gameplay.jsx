import React, { useState } from "react";
import "../styles/gameplay.css";

function Gameplay() {
  const [isClickCard, setClickCard] = useState("");
  const [isClickCardTwo, setClickCardTwo] = useState("");

  function validedCard(id, index) {
    if (isClickCard == "") {
      setClickCard(id);
    } else if (isClickCard != "" && isClickCard === id ) {
      if (id == isClickCard) {
        let copyLisCard = [...isClickCard];
        const listValid = lisCard.map((cards) => {
          if (cards.id === id) {
            return {
              ...cards,
              isfind: true,
            };
          }
          return  cards
        }
        );
        console.log(listValid);
        setLisCard([...listValid])
        setClickCard("");
        /* [{
        "id": "uno",
        "src": "sa",
        "alt": "uno",
        "isfind": false }, 
        {
        "id": "uno",
        "src": "sa",
        "alt": "uno",
        "isfind": false
    }
]
        */
      }
    }else{
      console.log("fallo");
      setClickCard("")
    }
  }

  const [lisCard, setLisCard] = useState([
    {
      id: "uno",
      src: "sa",
      alt: "uno",
      isfind: false,
    },
    {
      id: "uno",
      src: "sa",
      alt: "uno",
      isfind: false,
    },
    {
      id: "dos",
      src: "sa",
      alt: "dos",
      isfind: false,
    },
    {
      id: "dos",
      src: "sa",
      alt: "dos",
      isfind: false,
    },
  ]);

  return (
    <div className="gameplay">
      <div className="container-cards">
        {/* <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/> */}
        {lisCard.map((card, index) => {
          return (
            <Card
              card={card}
              index={index}
              key={index}
              validedCard={validedCard}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Gameplay;

function Card(props) {
  // console.log(props);
  const [isFlipped, setFlipped] = useState(false);
  // const [sepuese, setSepuede] = useState(false)

  const handleCardClick = () => {
    !props.card.isfind && setFlipped(!isFlipped);
  };

  return (
    <figure
      className={`carta-padre ${isFlipped ? "flipped" : ""}`}
      onClick={() => {
        handleCardClick();
        props.validedCard(props.card.id, props.index);
      }}
    >
      <div className="front">{props.card.isfind? "Ya le diste":"No"} {props.index+1}</div>
      <div className="back"> {props.card.isfind ? "Ya le diste":"no"} {props.index+1} </div>
    </figure>
  );
}
