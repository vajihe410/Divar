import React from 'react'
import { Routes,Route } from "react-router-dom";
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
    <Route path="/auth" element={<AuthPage/>}/>
    <Route path="/admin" element={<AdminPage/>}/>
    <Route path="/dashboard" element={<DashboardPage/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
  </Routes>
  )
}

export default Router