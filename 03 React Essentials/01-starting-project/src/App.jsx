import React from "react";
import {coreConcepts} from "./data.js";

import { Header } from "./Header.jsx";


function CoreConcept() {
  return (
    <>
      {coreConcepts.map((concept, index) => (
        <li key={index}>
          <img src={concept.img} alt={concept.title} />
          <h3>{concept.title}</h3>
          <p>{concept.description}</p>
        </li>
      ))}
    </>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
