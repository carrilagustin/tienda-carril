import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greetings="Card Title" textExample="Informacion adicional del producto"/>
    </div>
  );
}

export default App;
