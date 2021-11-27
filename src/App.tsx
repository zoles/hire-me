import "./App.css";
import ChildrenList from "./components/ChildrenList/ChildrenList";
import ChildrenContextProvider from "./store/children-context";

function App() {
  return (
    <div className="App">
      <h1>Demo app </h1>
      <ChildrenContextProvider>
        <ChildrenList />
      </ChildrenContextProvider>
    </div>
  );
}

export default App;
