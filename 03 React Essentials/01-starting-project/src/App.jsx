import React from "react";
import {coreConcepts} from "./data.js";
import reactImg from "./assets/react-core-concepts.png";



const reactDescription = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescription[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

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
