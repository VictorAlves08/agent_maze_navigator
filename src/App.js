import SelectAlgorithm from "./components/SelectAlgorithm";
import Maze from "./components/Maze";
import Footer from "./components/Footer";

import { AlgorithmProvider } from "./contexts/AlgorithmContext";

function App() {
  return (
    <AlgorithmProvider>
      <div className="container-app">
        <SelectAlgorithm />
        <Maze />
        <Footer />
      </div>
    </AlgorithmProvider>
  );
}

export default App;
