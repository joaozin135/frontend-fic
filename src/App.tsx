import './App.css'
import { DashboardLayoult } from './components/layoult/DashboardLayoult'

function App() {
  
  return (
    <DashboardLayoult>
      <section className='rounded-2xl bg-white p-6 shadow-sm'>
        <h3 className='text-xl font-bold'>Conteúdo central</h3>
        <p className='mt-2 text-slate-600'>página</p>
      </section>
    </DashboardLayoult>
  )
}

export default App
