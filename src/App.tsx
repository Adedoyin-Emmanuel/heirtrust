import React, { useEffect } from "react";
import AOS from "aos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/404";
import "./autoload";
const App = (): JSX.Element => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      delay: 10,
      mirror: true
    });
    AOS.refresh();
  });

  return (
    <React.Fragment>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/waitlist" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
};

export default App;
