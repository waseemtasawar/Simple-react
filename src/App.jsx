import Header from "./component/Header";
import CoreComponent from "./component/CoreComponent";
import { CORE_CONCEPTS } from "./data";
import TabButten from "./component/TabButten";
import "./component/TabButten.css";
import { useState } from "react";
import { EXAMPLES } from "./data";
function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function HandleSelect(selectedButton) {
    // selectedButton => "components","Props", "Jsx" , "State"
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
            <CoreComponent
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />

            <CoreComponent {...CORE_CONCEPTS[1]} />

            <CoreComponent {...CORE_CONCEPTS[2]} />

            <CoreComponent {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButten
              isSelected={selectedTopic === "components"}
              onSelect={() => HandleSelect("components")}
            >
              Component
            </TabButten>
            <TabButten
              isSelected={selectedTopic === "jsx"}
              onSelect={() => HandleSelect("jsx")}
            >
              JSX
            </TabButten>
            <TabButten
              isSelected={selectedTopic === "props"}
              onSelect={() => HandleSelect("props")}
            >
              Props
            </TabButten>
            <TabButten
              isSelected={selectedTopic === "state"}
              onSelect={() => HandleSelect("state")}
            >
              State
            </TabButten>
          </menu>
          {!selectedTopic ? (
            <p>please Select a topic </p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
