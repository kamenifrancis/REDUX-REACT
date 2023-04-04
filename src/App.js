import './App.css';
import TodoAdd from './Components/TodoAdd';
import TodoList from './Components/TodoList'; 
import React from 'react';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
const App = ()=> {
  return (
    <div>
        <Provider store={Store}>
    <App />
  </Provider>, 
  <TodoAdd/>
        <TodoList/>
        
        </div>
  );
}

export default App;




