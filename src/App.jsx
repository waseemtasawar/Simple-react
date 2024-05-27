import Header from "./component/Header";
import CoreComponent from "./component/CoreComponent";
import { CORE_CONCEPTS } from "./data";
import TabButten from "./component/TabButten";
import "./component/TabButten.css";
function App() {
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
            <TabButten>Component</TabButten>
            <TabButten>JSX</TabButten>
            <TabButten>Peops</TabButten>
            <TabButten>State</TabButten>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
