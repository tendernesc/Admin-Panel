import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../src/components/Login/Login";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default App;
