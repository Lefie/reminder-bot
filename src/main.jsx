import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Layout from './ui_components/Layout'
import Home from './pages/Home'
import './index.css'

function App() {

  return <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />

      </Route>
    </Routes>
  </BrowserRouter>
  
  </>
}

createRoot(document.getElementById('root')).render(
    <App />
)
