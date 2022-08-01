import React, { useRef } from "react";

const TestUaeRef = () => {
  let inputRef = useRef();
  const clickHandler = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={clickHandler}>Focus</button>
    </>
  );
};

export default TestUaeRef;
