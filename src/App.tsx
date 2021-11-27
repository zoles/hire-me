import { ThemeProvider } from "@primer/components";
import "./App.css";
import ChildrenList from "./components/ChildrenList/ChildrenList";
import Layout from "./components/layout/Layout";
import ChildrenContextProvider from "./store/children-context";

function App() {
  return (
    <div className="App">
      <ChildrenContextProvider>
        <ThemeProvider>
          <Layout>
            <ChildrenList />
          </Layout>
        </ThemeProvider>
      </ChildrenContextProvider>
    </div>
  );
}

export default App;
