import CoreComponent from "./CoreComponent.jsx";
import { CORE_CONCEPTS } from "../data.js";

import React from "react";

const CoreConcepts = () => {
  return (
    <div>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((componentItems) => (
            <CoreComponent key={componentItems.title} {...componentItems} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CoreConcepts;
