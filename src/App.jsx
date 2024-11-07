import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/Landing/index";
import HeroOne from "./Pages/Hero1/index";
import HeroTwo from "./Pages/Hero2/index";
import HeroThree from "./Pages/Hero3/index";
import HeroFour from "./Pages/Hero4/index";
import HeroFive from "./Pages/Hero5/index";
import HeroSix from "./Pages/Hero6/index";
import HeroSeven from "./Pages/Hero7/index";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="one" element={<HeroOne />} />
        <Route path="two" element={<HeroTwo />} />
        <Route path="three" element={<HeroThree />} />
        <Route path="four" element={<HeroFour />} />
        <Route path="five" element={<HeroFive />} />
        <Route path="six" element={<HeroSix />} />
        <Route path="seven" element={<HeroSeven />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
