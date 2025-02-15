import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import FileUploadDemo from "./components/FileUploadDemo";

export default function App() {
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/fileupload" element={<FileUploadDemo />} />
      </Routes>
    </Router>
    </>
  )
}