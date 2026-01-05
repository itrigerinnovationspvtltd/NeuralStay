
import { Route, Routes, Navigate  } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Dashboard from "./components/Dashboard"
import Sidebar from "./components/Sidebar"
import { useState } from "react"

function App() {

  // loggedIn state to control flow
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {!loggedIn ? (
        // --- Before Login ---
        <>
          <Navbar />
          <Routes>
            <Route
              path="/login"
              element={<Login onLogin={() => setLoggedIn(true)} />}
            />
            <Route
              path="/signup"
              element={<SignUp onLogin={() => setLoggedIn(true)} />}
            />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </>
      ) : (
        // After Login
        <div className="flex min-h-screen">
          <Sidebar onLogout={() => setLoggedIn(false)} />

          <main className="flex-1   px-6 bg-linear-to-br from-gray-900 via-black to-gray-900 text-white">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      )}
    </>
  )
}

export default App
