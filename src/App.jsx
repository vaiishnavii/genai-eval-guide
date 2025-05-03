import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Framework from "./pages/Framework";
import Resources from "./pages/Resources";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="framework" element={<Framework />} />
          <Route path="resources" element={<Resources />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
