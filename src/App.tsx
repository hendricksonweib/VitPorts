import { Routes, Route, Navigate } from "react-router-dom"
import LoginPage from "./app/login/LoginPage"
import DashboardLayout from "./layout/DashboardLayout"
import HomePage from "./app/dashboard/HomePage"

const isAuthenticated = false

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />
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
