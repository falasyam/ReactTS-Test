import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/Cards";
import { Container } from "reactstrap";

function App() {
  return (
    <main>
      <header className="App-header">ReactTS</header>
      <div className="">
        <Container className="py-2" fluid="lg">
          <Cards />
        </Container>
      </div>
    </main>
  );
}

export default App;
