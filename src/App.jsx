import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Framework from "./pages/Framework";
import Resources from "./pages/Resources";
import References from "./pages/References";
import Whyframeworks from "./pages/why-frameworks"
import Recommendations from "./pages/Recommendations";



import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="why-frameworks" element={<Whyframeworks />} />
          <Route path="framework" element={<Framework />} />
          <Route path="recommendations" element={<Recommendations />} />
          <Route path="resources" element={<Resources />} />
          <Route path="references" element={<References />} />
        </Route>
      </Routes>
    </Router>
    
  );
}

export default App;
