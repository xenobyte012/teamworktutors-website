import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <div className="w-full overflow-x-hidden h-screen">
      <Suspense
        fallback={
          <div>
            <div className="flex items-center h-screen justify-center bg-slate-900 text-h1 bold text-white">
              Loading Page...
            </div>
          </div>
        }
      >
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
