import React, {Component} from 'react';
import logo from './logo.svg';
//import './App.css';
import {initFirebase} from "./shared/Firebase";
import Pallete from "./components/Pallete";
import TodoInput from "./components/TodoInput";
import './css/Template.css';
import TodoList from "./components/TodoList";

class App extends  Component{
  constructor() {
    super();
    initFirebase();
  }

  render() {
    return (
        <div className="App">
          <main className="template">
            <div className="title">
              Todo-List
            </div>
            <section className="pallete-wrapper">
              <Pallete/>
            </section>
            <section className="form-wrapper">
              <TodoInput/>
            </section>
            <section className="todos-wrapper">
              <TodoList/>
            </section>
          </main>
        </div>
    );
  }

}

export default App;
