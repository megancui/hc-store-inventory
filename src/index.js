import React from "react";
import ReactDOM from "react-dom";
import SimpleTabs from './SimpleTabs';
import "./styles.css";

class App extends React.Component {

  render() {
    return (
    <div className="App">
      <SimpleTabs/>
    </div>
  );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
