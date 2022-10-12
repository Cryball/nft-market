import './App.css';
import { Route, Routes } from 'react-router';
import { MainPage, UserCabinet, Marketplace, ItemPage } from "./pages";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/userCabinet" element={<UserCabinet />} />
        <Route path="/marketplace/:id" element={<ItemPage />} />
      </Routes>
    </div>
  );
}

export default App;
