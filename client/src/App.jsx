import "./App.css";
import { Toaster } from "react-hot-toast";
import User from "./components/User.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Edit from "./components/Edit.jsx";
import Create from "./components/Add.jsx";
function App() {
  return (
    <>
    <Toaster />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<User />} />,
            <Route path="/add" element={<Create />} />,
            <Route path="/edit/:id" element={<Edit />} />,
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
