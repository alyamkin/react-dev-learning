import { useState } from 'react';
import Chat from './Chat.js';
import ContactList from './ContactList.js';

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  const [messages, setMessages] = useState({});

  function handleChangeMessage(id, text) {
    const nextMessages = { ...messages, [id]: text };
    setMessages(nextMessages);
  }

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact) => setTo(contact)}
      />
      <Chat
        key={to.id}
        contact={to}
        onChangeMessage={handleChangeMessage}
        message={messages[to.id]}
      />
    </div>
  );
}

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];
