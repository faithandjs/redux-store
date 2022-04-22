import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Details from './components/details';
import Cart from './components/cart';


function App() {
  return (
  
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='shop%item%1' element={<Details/>}/>
          <Route path='cart' element={<Cart/>}/>
        </Routes>
      </div>
    
  );
}
//  <Provider store={store}> </Provider>
export default App;
