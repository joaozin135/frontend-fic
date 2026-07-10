import './App.css'
import { Route, Routes } from 'react-router-dom'
import { DashboardLayout } from './components/layoult/DashboardLayoult'
import { DashboardHome } from './pages/DashboardHome'
import { UsersPage } from './pages/UsersPage'
import { CategoryPage } from './pages/CategoryPage'
import { CoursesPage } from './pages/CoursesPage'

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="usuarios" element={<UsersPage />} />
        <Route path="categorias" element={<CategoryPage />} />
        <Route path="cursos" element={<CoursesPage />} />
      </Route>
    </Routes>
  )
}

export default App
