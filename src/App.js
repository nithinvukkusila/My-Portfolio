import './App.scss';
import MainLayout from './views/MainLayout';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
     <MainLayout/>
    </div>
  );
}

export default App;
