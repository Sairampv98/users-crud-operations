import "./App.css";
// import JSX from "./components/complexElement";
// import FuncComponent from "./components/StatelessFuctionalComponent";
// import ReactComponent from "./components/ReactComponent";
// import ParentComponent from "./components/ParentComponent";
// import RComponent from "./components/FreeCodeCamp";
import { Toaster } from "react-hot-toast";
import User1 from "./components/getuser/User";
// import Add from "./components/adduser/Add";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Edit from "./components/updateuser/Edit";
import Register from "./components/Register";
import Create from "./components/adduser/Add";
function App() {
  return (
    <>
    <Toaster />
      <Router>
        <div className="App">
          <Routes>
          <Route path="/register" element={<Register />} />,
            <Route path="/" element={<User1 />} />,
            <Route path="/add" element={<Create />} />,
            <Route path="/edit/:id" element={<Edit />} />,
          </Routes>
        </div>
      </Router>

      {/* <ReactComponent />
      <ParentComponent />
      <RComponent />

      <JSX />
      <FuncComponent /> */}
    </>
  );
}

export default App;
