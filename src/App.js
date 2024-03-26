import './App.css';
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from './layout/PrivateRoutes';
import PublicRoutes from './layout/PublicRoutes';
import Login from './pages/Login/Login'
import ListDevice from './pages/ListDevice/ListDevice';

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path='/list-device' element={<ListDevice />} />
      </Route>
      <Route element={<PublicRoutes />}>
        <Route path='/' element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
