
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/nav'
import HomePage from './pages/homepage'
import Planner from './pages/planner'

import User from './pages/user'
import Booking from './pages/booking'
import Map from './pages/booking'

import SignUp from './pages/signup'
import Login from './pages/login'



function App() {

  return (
    <main>

      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route element={
          <><Nav />
          <Outlet/>
        </>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/map" element={<Map />} />
        <Route path="/user" element={<User />} />

        <Route path="*" element={<Navigate to="/E404" />} /></Route>       
      </Routes>
    </main>
  )
}

export default App
