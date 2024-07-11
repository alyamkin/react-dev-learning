import { useState } from 'react';

export default function Form() {
  // const [isSent, setIsSent] = useState(false);
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('');

  // if (isSent) {
  //   return <h1>Your message is on its way!</h1>;
  // }
  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  }
  return (
    //   <form
    //     onSubmit={(e) => {
    //       e.preventDefault();
    //       setIsSent(false);
    //       setIsSent(true);
    //       sendMessage(message);
    //     }}
    //   >
    //     <textarea
    //       placeholder="Message"
    //       value={message}
    //       onChange={(e) => setMessage(e.target.value)}
    //     />
    //     <button type="submit">Send</button>
    //   </form>
    // );
    <form onSubmit={handleSubmit}>
      <label>
        To:{' '}
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

function sendMessage(message) {
  alert(message);
}
