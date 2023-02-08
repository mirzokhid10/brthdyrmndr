import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>
          {people.length > 0
            ? `Today we have ${people.length} birthdays`
            : "Sorry:(, Today we not have birthdays"}
        </h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear yall</button>
      </section>
    </main>
  );
}

export default App;
