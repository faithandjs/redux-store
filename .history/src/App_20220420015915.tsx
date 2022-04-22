import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Details from "./components/details";
import Cart from "./components/cart";
import { dataState } from "./type";
import { useSelector } from "react-redux";
import { storeData } from "./features/data";

function App() {
  const data: dataState = useSelector(storeData);
  let path = "shop%item%" + data.expandedItem.item.id
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={path} element={<Details />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Details />
      <Cart />
    </div>
  );
}
//  <Provider store={store}> </Provider>
export default App;
