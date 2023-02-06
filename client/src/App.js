
import {BrowserRouter,Routes,Router, Route} from 'react-router-dom'
import Login from './pages/common/Login/Login';
import Register from './pages/common/Register/Register';

function App() {
  return (
   <BrowserRouter>

   <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
