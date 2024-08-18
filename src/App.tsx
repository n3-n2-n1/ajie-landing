// src/App.tsx
import Home from "./pages/Home";
import React from "react";
import Navbar from "./components/MainNav";
import MainNavbar from "./components/MainNav";
import FooterHome from "./components/FooterHome";

const App: React.FC = () => {
  return (
    <>
      <MainNavbar />

      <div>
        <Home />
      </div>

      <FooterHome />
    </>
  );
};

export default App;
