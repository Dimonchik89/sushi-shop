import { Routes, Route } from 'react-router-dom';
import Main from "./pages/Main";
import Admin from './pages/Admin';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import OrderPage from './pages/Order';
import './App.scss';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/admin/*" element={<Admin/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/order" element={<OrderPage/>}/>
    </Routes>
  );
}

export default App;
