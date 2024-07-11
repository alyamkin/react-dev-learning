import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          // setNumber(number + 1);
          // setNumber(number + 1);
          // setNumber(number + 1);
          // setNumber((prevNumber) => prevNumber + 1);
          // setNumber((prevNumber) => prevNumber + 1);
          // alert(number);
          // setNumber((prevNumber) => {
          //   alert(prevNumber);
          //   return prevNumber + 1;
          // });
          // setNumber(number + 3);
          // setTimeout(() => alert(number), 1000);
          // alert(number);
        }}
      >
        +3
      </button>

      {/* <button
        onClick={() => {
          setNumber(number + 5);
          setNumber((n) => n + 1);
        }}
      > */}

      <button
        onClick={() => {
          setNumber(number + 5);
          setNumber((n) => n + 1);
          setNumber(42);
        }}
      >
        Replace the number
      </button>
    </>
  );
}
