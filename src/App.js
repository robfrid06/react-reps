import './App.css';
import Class from './components/Class';

function App() {
  const school = {
    className: "React 101",
    students: [{name: "Robert", grades: [99, 24, 75]}, {name: "Rob", grades: [23, 17, 5]}, {name: "Bert", grades: [93, 85, 90]}]
  }
  return (
    <div className="App">
      <Class school={school} />
    </div>
  );
}

export default App;
