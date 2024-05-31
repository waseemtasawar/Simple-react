import React from "react";
import TabButten from "../component/TabButten.jsx";
import { useState } from "react";
import { EXAMPLES } from "../data.js";
const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();
  function HandleSelect(selectedButton) {
    // selectedButton => "components","Props", "Jsx" , "State"
    setSelectedTopic(selectedButton);
    // console.log(selectedButton);
  }

  return (
    <div>
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
    </div>
  );
};

export default Examples;
