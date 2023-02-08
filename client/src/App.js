
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';
import Exams from './pages/admin/Exams/Exams';
import Login from './pages/common/Login/Login';
import Quizz from './pages/common/Quizz/Quizz';
import Register from './pages/common/Register/Register';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Common Routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* User Routes */}

        <Route
          path='/quizz'
          element={
            <ProtectedRoute>
              <Quizz />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path='/admin/exams'
          element={
            <ProtectedRoute>
              <Exams />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
