import { addTestFoyer } from "./services/testFirestore.js";

function App() {
  return (
    <button
      onClick={addTestFoyer}
      className="bg-blue-500 text-white p-3 rounded"
    >
      Tester Firestore
    </button>
  );
}

export default App;
