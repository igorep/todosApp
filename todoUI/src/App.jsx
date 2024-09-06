import Navebar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Todos from "./components/todos/Todos";
import Users from "./components/users/Users";

function App() {
  return (
    <>
      <Router>
        <Navebar />
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
