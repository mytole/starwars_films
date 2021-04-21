import "./App.css";
import Background from "./components/Background";
import MoviesSlider from "./components/MoviesSlider";

function App() {
  return (
    <>
      <Background />
      <h1 style={{ fontSize: 80, textAlign: "center" }} className="logo">
        Star wars films
      </h1>
      <MoviesSlider />
    </>
  );
}

export default App;
