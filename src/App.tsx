import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserRegistration from "./components/UserRegistration";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserRegistration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
