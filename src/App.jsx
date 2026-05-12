import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import MenuOld from './pages/MenuOld'
import Reserve from './pages/Reserve'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/old" element={<MenuOld />} />
      <Route path="/reserve" element={<Reserve />} />
    </Routes>
  )
}
