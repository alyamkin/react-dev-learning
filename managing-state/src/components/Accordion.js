import { useState } from 'react';

export default function Accordion() {
  const [activePanel, setActivePanel] = useState(null);

  function handleActive(panel) {
    setActivePanel(panel);
  }

  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        onActive={handleActive}
        isActive={activePanel === 'About'}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        onActive={handleActive}
        isActive={activePanel === 'Etymology'}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

function Panel({ title, children, onActive, isActive }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => onActive(title)}>Show</button>
      )}
    </section>
  );
}
