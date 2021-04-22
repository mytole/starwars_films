import "./App.css";
import Background from "./components/Background";
import MoviesSlider from "./components/MoviesSlider";
import styles from './App.style'

function App() {
  return (
    <>
      <Background />
      <h1 style={styles.header} className="logo">
        Star wars films
      </h1>
      <MoviesSlider />
    </>
  );
}

export default App;
