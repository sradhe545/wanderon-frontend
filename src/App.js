import "./App.css";
import Login from "./component/Login";
import Signup from "./component/Signup";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authentication";
import { RequireAuth } from "./context/RequireAuth";
import Product from "./component/Product";
import Navbar from "./component/Navbar";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/product"
            element={
              <RequireAuth>
                <Product />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
