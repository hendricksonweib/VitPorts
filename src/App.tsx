import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import { useState } from "react"
import LoginPage from "./app/login/LoginPage"
import DashboardLayout from "./layout/DashboardLayout"
import HomePage from "./app/dashboard/HomePage"

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" />
          ) : (
            <LoginPage onLogin={() => setIsAuthenticated(true)} />
          )
        }
      />

      <Route
        path="/dashboard"
        element={
          isAuthenticated ? <DashboardLayout /> : <Navigate to="/" />
        }
      >
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}
