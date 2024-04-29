import React from 'react'
import { Routes,Route,Navigate } from "react-router-dom";
import {useQuery} from '@tanstack/react-query'
import { getProfile } from '../services/user';
//pages
import HomePage from "../pages/HomePage"
import AuthPage from "../pages/AuthPage";
import DashboardPage from "../pages/DashboardPage"
import AdminPage from "../pages/AdminPage"
import NotFoundPage from "../pages/404Page"

function Router() {
  const {data,isLoading,error} = useQuery(["profile"], getProfile)
  if (isLoading) return <h1>Loading...</h1>
  
  return (
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/auth" element={data ? <Navigate to='/dashboard'/> : <AuthPage/>}/>
    <Route path="/admin" element={data && data.data.role === "ADMIN" ? <AdminPage/> : <Navigate to='/'/>}/>
    <Route path="/dashboard" element={data ? <DashboardPage/> : <Navigate to='auth'/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
  </Routes>
  )
}

export default Router