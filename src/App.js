import "./App.css";
import Todo from "./components/todo";
import Fetchweather from "./components/weather/Weather";
//import all the tools here

function App() {
  return (
    <div className="App">
      <Todo />
      <Fetchweather />
    </div>
  );
}

export default App;
