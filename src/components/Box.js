import React, { useRef } from "react";

function Box() {
  const elementRef = useRef();

  //handlick clicking of the button
  function handleClick() {
    console.log("Measurements: ", elementRef.current.getBoundingClientRect());
  }

  return (
    <div ref={elementRef}>
      <h1>Box</h1>
      <button onClick={handleClick}>Measure</button>
    </div>
  );
}

export default Box;
