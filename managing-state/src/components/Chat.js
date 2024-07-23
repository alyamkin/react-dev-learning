export default function Chat({ contact, onChangeMessage, message }) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
          onChangeMessage(contact.id, e.target.value);
        }}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}
