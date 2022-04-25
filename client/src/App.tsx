import { ApolloProvider } from "@apollo/client";
import client from "src/data/apollo";
import "./App.css";
import MainRouter from "./MainRouter";
import { Navigation } from "src/components";

function App() {
  return (
    <main>
      <ApolloProvider client={client}>
        <div className="App" style={{ display: "flex" }}>
          <Navigation />
          <MainRouter />
        </div>
      </ApolloProvider>
    </main>
  );
}

export default App;
