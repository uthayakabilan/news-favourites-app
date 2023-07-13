import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NewsList from "./components/NewsList/NewsList";

function App() {
  const user = useSelector((state) => state.user.user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/auth" />}>
          <Route path="feed/:category" element={<NewsList />}></Route>
        </Route>
        <Route
          path="/auth"
          element={user ? <Navigate to={"/feed/latest"} /> : <Auth />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
