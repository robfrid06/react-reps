import './App.css';
import Galaxy from './components/Galaxy';


function App() {
  const galaxy = {
    name: "Milky Way",
    planets: [
      {
        name: "Earth",
        moons: ["Moon"]
      },
      {
        name: "Jupiter",
        moons: ["Europa", "Io", "Ganymede", "Callisto"]
      },
      {
        name: "Saturn",
        moons: ["Titan", "Mimas", "Enceladus"]
      }
    ]
  }
  return (
    <div className="App">
      <Galaxy galaxy={galaxy} />
    </div>
  );
}

export default App;
