import { Routes, Route, Navigate } from "react-router-dom";  
import { ROUTE } from "./route";  
import HomePage from "../pages/HomePage";  
import LoginPage from "../pages/LoginPage";  
import NotFoundPage from "../pages/NotFoundPage";  

export default function Router() {  
  return (  
    <Routes>  
      <Route path={ROUTE.LOGIN} element={<LoginPage />} />  
      <Route path={ROUTE.HOME} element={<HomePage />} />  
      <Route path={ROUTE.PRODUCTS} element={<HomePage />} />  
      <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />  
      <Route path="/home" element={<Navigate to={ROUTE.HOME} replace />} />  
    </Routes>  
  );  
}  