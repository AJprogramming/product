import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Detail from "./components/Detail";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/home" default />
          <Route element={<Detail />} path="/product/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
