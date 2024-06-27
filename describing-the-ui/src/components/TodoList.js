const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
}

const person = {
  name: "Hedy Lamarr's",
  theme: {
    backgroundColor: 'black',
    color: 'pink',
  },
};

export default function TodoList() {
  return (
    <>
      <h1>
        {person.name} Todos for {formatDate(today)}
      </h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul style={person.theme}>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}
