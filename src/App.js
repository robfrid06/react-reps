import './App.css';
import Period from './components/Period';


function App() {
  const musicHistory = {
    name: "Romantic",
    composers: [
      {
        name: "Verdi",
        compositions: ["La Traviata", "Aida", "Nabucco"]
      },
      {
        name: "Puccini",
        compositions: ["La Boheme", "Madama Butterfly", "Tosca"]
      },
      {
        name: "Tchaikovsky",
        compositions: ["Pique Dame", "1812 Overture", "The Nutcracker"]
      }
    ]
  }
  return (
    <div className="App">
      <Period period={musicHistory} />
    </div>
  );
}

export default App;
