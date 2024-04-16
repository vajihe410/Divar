import React from 'react'
import { Routes,Route } from "react-router-dom";
//pages
import HomePage from "../pages/HomePage"
import AuthPage from "../pages/AuthPage";
import DashboardPage from "../pages/DashboardPage"
import AdminPage from "../pages/AdminPage"
import NotFoundPage from "../pages/404Page"

function Router() {
  return (
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/auth" element={<AuthPage/>}/>
    <Route path="/admin" element={<AdminPage/>}/>
    <Route path="/dashboard" element={<DashboardPage/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
  </Routes>
  )
}

export default Router