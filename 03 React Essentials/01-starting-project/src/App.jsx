import React from "react";
import reactImg from "./assets/react-core-concepts.png";
import jsxImg from "./assets/jsx-ui.png";
import configImg from "./assets/config.png";
import stateMgmtImg from "./assets/state-mgmt.png";

const coreConcepts = [
  {
    title: "Components",
    description:
      "The core building UI block - compose the user interface by combining multiple components",
    img: reactImg,
  },
  {
    title: "JSX",
    description:
      "Return the (potentially dynamic) HTML code to define the actual markup that will be rendered",
    img: jsxImg,
  },
  {
    title: "Props",
    description:
      "Make Components configurable (and therefore reusable) by passing input data to them",
    img: configImg,
  },
  {
    title: "State",
    description:
      "React-managed data which, when changed, causes the components to re-render & the UI to update",
    img: stateMgmtImg,
  },
];

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
