
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/common/Login/Login';
import Quizz from './pages/common/Quizz/Quizz';
import Register from './pages/common/Register/Register';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/quizz' element={<ProtectedRoute>
          <Quizz />
        </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
