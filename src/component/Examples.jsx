import React from "react";
import TabButten from "../component/TabButten.jsx";
import "./TabButten.css";
import Section from "./Section.jsx";
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
    <Section title="Examples" id="examples">
      <menu>
        <TabButten
          isSelected={selectedTopic === "components"}
          onClick={() => HandleSelect("components")}
        >
          Component
        </TabButten>
        <TabButten
          isSelected={selectedTopic === "jsx"}
          onClick={() => HandleSelect("jsx")}
        >
          JSX
        </TabButten>
        <TabButten
          isSelected={selectedTopic === "props"}
          onClick={() => HandleSelect("props")}
        >
          Props
        </TabButten>
        <TabButten
          isSelected={selectedTopic === "state"}
          onClick={() => HandleSelect("state")}
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
    </Section>
  );
};

export default Examples;
