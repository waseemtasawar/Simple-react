import Header from "./component/Header";
import Examples from "./component/Examples";
import "./component/TabButten.css";
import CoreConcepts from "./component/CoreConcepts";
function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
