import './App.css';
import Granddad from './components/Granddad';

function App() {
  const granddads = ["Bob"]
  return (
    <div className="App">
      {granddads.map(granddad => <Granddad name={granddad} />)}
    </div>
  );
}

export default App;
