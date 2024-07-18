import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Presale from "./components/Presale";
import { WalletConnectionProvider } from "./components/WalletConnectionProvider";
function App() {
  return (
    <div className=" ">
      <WalletConnectionProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/presale" element={<Presale />} />
          </Routes>
        </BrowserRouter>
      </WalletConnectionProvider>
    </div>
  );
}

export default App;
