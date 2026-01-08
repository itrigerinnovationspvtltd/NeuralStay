
import { Route, Routes, Navigate  } from "react-router-dom"
import { useState } from "react"
import Navbar from "./components/Navbar"
import Login from "./Auth/Login"
import SignUp from "./Auth/SignUp"
import Dashboard from "./components/Dashboard"
import Sidebar from "./components/Sidebar"
import HotelManagement from "./hotel-management/HotelManagement"
import HotelProfile from "./hotel-management/HotelProfile "
import Topbar from "./components/Topbar "
import ForgotPassword from "./Auth/ForgotPassword"
import { Toaster } from "react-hot-toast"
import FloorManagement from "./hotel-management/FloorManagement"
import RoomManagement from "./hotel-management/RoomManagement"
import Housekeeping from "./hotel-management/Housekeeping"
import Booking from "./booking/Booking"
import SpecialPrices from "./hotel-management/SpecialPrices"
import AddOnServices from "./hotel-management/AddOnServices"

function App() {

  // loggedIn state to control flow
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {!loggedIn ? (
        // --- Before Login ---
        <>
          <Navbar />
          <Toaster position="top-right" reverseOrder={false} />
          <Routes>
            <Route
              path="/login"
              element={<Login onLogin={() => setLoggedIn(true)} />}
            />
            <Route
              path="/signup"
              element={<SignUp onLogin={() => setLoggedIn(true)} />}
            />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </>
      ) : (
        // After Login
        <div className="flex min-h-screen w-full bg-gray-50 dark:bg-linear-to-br from-gray-900 via-black to-gray-900">
          <Sidebar onLogout={() => setLoggedIn(false)} />
          <Topbar onLogout={() => setLoggedIn(false)} />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/hotel" element={<HotelManagement />} />
              <Route path="/hotel/profile" element={<HotelProfile />} />
              <Route path="/hotel/floor" element={<FloorManagement />} />
              <Route path="/hotel/room" element={<RoomManagement />} />
              <Route path="/hotel/housekeeping" element={<Housekeeping />} />
              <Route path="/hotel/prices" element={<SpecialPrices />} />
              <Route path="/hotel/add-ons" element={<AddOnServices />} />
              <Route path="/booking" element={<Booking />} />
            </Routes>
          </main>
        </div>
      )}
    </>
  )
}

export default App
