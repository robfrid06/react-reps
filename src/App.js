import './App.css';
import SPA from './components/SPA';


function App() {
  const SPAs = {
    name: "SPAs",
    frameworks: [
      {
        name: "React",
        pros: ["Lightweight", "SoC", "JSX", "High Performance"]
      },
      {
        name: "Angular",
        pros: ["High Speed", "Caching", "High Extensibility"]
      },
      {
        name: "Vue",
        pros: ["Lightweight", "Minimalistic", "Reusable Components", "Developer Friendly"]
      }
    ]
  }
  return (
    <div className="App">
      <SPA spas={SPAs} />
    </div>
  );
}

export default App;
