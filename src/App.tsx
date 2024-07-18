import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Presale from "./components/Presale";

function App() {
  return (
    <div className=" ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/presale" element={<Presale />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
