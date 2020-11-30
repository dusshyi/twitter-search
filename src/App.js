import "./App.css";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Search fetchUrl={`photos`} />
    </div>
  );
}

export default App;
