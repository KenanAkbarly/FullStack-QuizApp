
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';
import Exams from './pages/admin/Exams';
import AddEditExams from './pages/admin/Exams/AddEditExam/AddEditExams';
import Login from './pages/common/Login';
import Quizz from './pages/common/Quizz';
import Register from './pages/common/Register';
import Loader from './components/Loader'
import { useSelector } from 'react-redux';
function App() {
  const { loading } = useSelector(state => state.loader)
  return (
    <>
      {loading && <Loader />}
      <BrowserRouter>

        <Routes>

          {/* Common Routes */}
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
          <Route path='/login' element={<Login />} />

          {/* Admin Routes */}
          <Route
            path='/admin/exams'
            element={
              <ProtectedRoute>
                <Exams />
              </ProtectedRoute>
            }
          />

          <Route
            path='/admin/exams/add'
            element={
              <ProtectedRoute>
                <AddEditExams />
              </ProtectedRoute>
            }
          />

          <Route
            path='/admin/exams/edit/:id'
            element={
              <ProtectedRoute>
                <AddEditExams />
              </ProtectedRoute>
            }
          />

        </Routes>
      </BrowserRouter></>
  )
}

export default App;
