import React from "react";
import NavBar from "./frontend/NavBar";
import MainRouter from "./frontend/routes/MainRouter";
import Footer from "./frontend/components/Footer/Footer";
import "./frontend/scss/global.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <MainRouter />
        <Footer />
      </header>
    </div>
  );
}

export default App;
