import React, { useEffect, useRef, useState } from "react";
import { makeRandomNumber } from "../utils";

function Ticker() {
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("black");

  //setting previous price reference
  const prevPriceRef = useRef(price)

  //setting effects to re-render only when price changes
  useEffect(() => {
    const previousPrice = prevPriceRef.current;
    if (price > previousPrice) {
      setColor('green');
    } else if (price < previousPrice) {
      setColor("red");
    } else {
      setColor("black");
    }

    prevPriceRef.current = price;
  }, [price])

  //setting effects to re-render after every change
  
  useEffect(() => {
    const id = setInterval(() => setPrice(makeRandomNumber), 1000);
    return function () {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h1>TickerMaster</h1>
      <h2 style={{ color: color }}>Price: ${price}</h2>
    </div>
  );
}

export default Ticker;
