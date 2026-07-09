import './App.css'
import { Route, Routes } from 'react-router-dom'
import { DashboardLayout } from './components/layoult/DashboardLayoult'
import { DashboardHome } from './pages/DashboardHome'
import { UsersPage } from './pages/UsersPage'

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="produtos" element={<UsersPage />} />
      </Route>
    </Routes>
  )
}

export default App
