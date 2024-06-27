// let guest = 0;

function Cup({ guest }) {
  // guest = guest + 1; // Bad one. Side evverct and it's unpredicatble

  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}
