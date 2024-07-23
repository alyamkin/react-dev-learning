import { useState } from 'react';

export default function FormQuiz() {
  const [status, setStatus] = useState('empty');
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleChange(e) {
    const value = e.target.value;
    setAnswer(value);

    if (value.length === 0) {
      setStatus('empty');
    } else {
      setStatus('typing');
    }
  }

  if (status === 'success') {
    return <h1>That's right</h1>;
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>How many hours in a day?</p>
      <form onSubmit={handleSubmit}>
        <textarea
          disabled={status === 'submitting'}
          onChange={handleChange}
          value={answer}
        />
        <br />
        <button
          type="submit"
          disabled={status === 'empty' || status === 'submitting'}
        >
          Submit
        </button>
        {status === 'submitting' && <p>Submitting...</p>}
        {error !== null && <p>{error.message}</p>}
      </form>
    </>
  );
}

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === '24') {
        resolve();
      } else {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      }
    }, 2000);
  });
}
