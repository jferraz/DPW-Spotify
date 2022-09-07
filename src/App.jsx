import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { LogIn } from './pages/LogIn/LogIn'
import { SignUp } from './pages/SignUp/SignUp'

export function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}
