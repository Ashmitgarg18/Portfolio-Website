import { Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio.jsx";
import Blog from "./Blog.jsx";
import Reading from "./Reading.jsx";
import Navbar from "./Navbar.jsx";

function App() {
  return (
    <>
      <Navbar /> {/* ✅ Now the Navbar shows on every page */}
      <div className="pt-20"> {/* small top padding so content doesn’t hide under the fixed navbar */}
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/reading" element={<Reading />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
