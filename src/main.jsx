import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Layout from './ui_components/Layout'
import Home from './pages/Home'
import ReminderForm from './pages/ReminderForm'
import ViewAllReminders from './pages/ViewAllReminders'
import './index.css'

function App() {

  return <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="add-reminder" element={<ReminderForm form_mode={"adding"}  />}/>
        <Route path="edit-reminder/:reminder_id" element={<ReminderForm form_mode={"editing"}  />}/>
        <Route path="view-all" element={<ViewAllReminders /> } />
      </Route>
    </Routes>
  </BrowserRouter>
  
  </>
}

createRoot(document.getElementById('root')).render(
    <App />
)
