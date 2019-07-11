import React, {Component} from 'react';
import logo from './logo.svg';
//import './App.css';
import {initFirebase} from "./Shared/Firebase";
import TodoItem from "./Components/TodoItem";
import Pallete from "./Components/Pallete";
import TodoInput from "./Components/TodoInput";
import './Css/Template.css';
import TodoList from "./Components/TodoList";

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
            <Pallete/>
            <TodoInput/>
            <TodoList/>
          </main>
        </div>
    );
  }

}

export default App;
