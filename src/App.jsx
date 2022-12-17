import { useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Host from './pages/Host/Host'
import AddEventForm from './pages/Host/components/AddEventForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDash from './pages/User/UserDash'
import SponsorDash from './pages/Sponsor/SponsorDash'
import ViewMore from './pages/User/components/ViewMoreEvent'
import ViewMoreSponsor from './pages/Sponsor/components/ViewMoreEvent'

import NavScrollExample from './common/components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavScrollExample />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Register />} />
        <Route path='/user-dash' element={<UserDash />} />
        <Route path='/sponsor-dash' element={<SponsorDash />} />
        <Route path='/view-more/:id' element={<ViewMore />} />
        <Route path='/view-more-sponsor/:id' element={<ViewMoreSponsor />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/add-event-form/' element={<AddEventForm />} />
      </Routes>
    </div>
  )
}


export default App
