import React from "react";
import { BrowserRouter, Route, Routes } from  'react-router-dom'

// Paginas
import Login from "./pages/login/Login";


const App = () => {
  return (
    <BrowserRouter basename="/routes-text-01/">
      <Routes>
        <Route path="/" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
