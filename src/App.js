import React, { Component } from "react";
import "./App.css";
import store from "./store";

export default class App extends Component {
  render() {
    console.log(store.initialState);

    return (
      <div className="welcome-message">
        <h1>Welcome to your blank canvas!</h1>
        <p>
          Be sure to inspect and familiarize yourself with what data you will be
          working with. This is already imported for you from './data.js'.
        </p>
      </div>
    );
  }
}
