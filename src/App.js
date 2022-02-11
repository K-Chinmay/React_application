import Main from "./components/MainComponent";
import { render } from "@testing-library/react";
import { Component } from "react/cjs/react.production.min";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
