import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import { Create } from "./components/create/create";
import { Notes } from "./components/notes/notes";
import { Header } from "./components/header/header";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="/create" element={<Create />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
