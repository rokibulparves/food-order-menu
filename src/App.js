import { Link, Route, Routes, useNavigate } from "react-router-dom";
import  Home from './pages/Home'
import Table1 from "./pages/Table1";
import Table2 from "./pages/Table2";
import Table3 from "./pages/Table3";
import Menu from "./pages/Menu";


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/table1" element={ <Table1 /> } />
      <Route path="/table2" element={ <Table2 /> } />
      <Route path="/table3" element={ <Table3 /> } />
      <Route path="/menu" element={ <Menu /> } />
    </Routes>
    </>
  );
}

export default App;
