import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'
import { Sidebar } from '../Sidebar'

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Sidebar />
      <div className="min-h-screen pl-64 flex flex-col">
        <Navbar title="Gestão de produtos" />
        <main className="flex-1 p-6"><Outlet /></main>
        <Footer />
      </div>
    </div>
  )
}