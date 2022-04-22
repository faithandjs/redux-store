import React from 'react';
import { Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/home';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>

        </Routes>
        <Home/>
      </div>
    </Provider>
  );
}

export default App;
