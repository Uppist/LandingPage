/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Website from "./components/Website";
import Privacy from "./components/Privacy";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/LandingPage' element={<Website />} />
          <Route path='Privacy' element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
