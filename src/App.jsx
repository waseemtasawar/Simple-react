import reacrImg from "./assets/react-core-concepts.png";
import CoreComponentImg from "./assets/components.png";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reacrImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreComponent({ Image, Description, title }) {
  return (
    <li>
      <img src={Image} alt={title} />
      <h3>{title}</h3>
      <p>{Description}</p>
    </li>
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
            <CoreComponent
              title="Components"
              Description="THe Core UI Building Block"
              Image={CoreComponentImg}
            />
            <CoreComponent />
            <CoreComponent />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
