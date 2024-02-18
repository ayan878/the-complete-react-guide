import { useState } from "react";
import { CoreConcept } from "./CoreConcept.jsx";
import { Header } from "./Header.jsx";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "./data.js";
function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedButton);
  }
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton> */}
            {Object.keys(EXAMPLES).map((key) => (
              <TabButton
                isSelected={key === selectedTopic}
                key={key}
                onSelect={() => {
                  handleSelect(key);
                }}
              >
                {EXAMPLES[key].title}
              </TabButton>
            ))}
          </menu>
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>

        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
