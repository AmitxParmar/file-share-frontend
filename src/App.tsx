import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
import Header from "./components/LandingPage/Header";
import DownloadSingleFile from "./Pages/DownloadSingleFile";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/download/:id" element={<DownloadSingleFile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
