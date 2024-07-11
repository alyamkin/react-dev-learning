export default function Button() {
  function handleClick() {
    alert('Click button');
  }
  return <button onClick={handleClick}>Click me</button>;
}
