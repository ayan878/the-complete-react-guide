import { coreConcepts } from "./data.js";

export function CoreConcept() {
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
