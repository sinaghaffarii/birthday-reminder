import React, { useState } from "react";
import List from "./Components/List";
import { data } from "./util/data";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <sectioniv className="container">
        <h3>{people.length} birthday today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </sectioniv>
    </main>
  );
};

export default App;
