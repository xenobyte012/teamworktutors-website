// import Home from "./pages/Home";
// import About from "./pages/About"
// import Contact from "./pages/Contact"
import Navbar from "./components/Navbar";

import { lazy , Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
    return (
      <div className="w-full overflow-x-hidden h-screen">
        <Navbar />
        <Route path="/" element={<Home />} />
        <Suspense
          fallback={
            <div>
              <div className="flex items-center h-screen justify-center bg-slate-900 text-h1 bold text-white">
                Loading Page...
              </div>
            </div>
          }
        >
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    );
}

export default App
