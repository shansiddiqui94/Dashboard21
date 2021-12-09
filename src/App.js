import "./App.css";
import Todo from "./components/todo";
import FetchWeather from "./components/weather/Weather";
//import all the tools here

function App() {
  return (
    <div className="App">
      <Todo />
      <FetchWeather />
    </div>
  );
}

export default App;
