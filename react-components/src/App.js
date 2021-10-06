import './App.css';
// import FunctionalGreeting from "./components/FunctionalGreeting";
import StatefulGreeting from "./components/StatefulGreeting";
// import HooksCounter from "./components/HooksCounter";
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting name="John" /> */}
      <StatefulGreeting greeting="hi" />
      {/* <HooksCounter name="Mike" /> */}
    </div>
  );
}

export default App;
