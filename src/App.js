import "./App.css";
// import useMediaQuery from "./hooks/useMediaQuery";
// import DataFetching from "./components/DataFetching";
import Search from "./components/Search";

function App() {
  // const matches = useMediaQuery("(min-width: 1005px)");

  return (
    <div className="App">
      {/* {matches ? <Search /> : <DataFetching />} */}
      <Search fetchUrl={`photos`} />
    </div>
  );
}

export default App;
