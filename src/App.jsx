import { Chip } from "@nextui-org/react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Landing_Page } from "./Pages/LandingPage/Landing_Page.View";
import Layout from "./Layout";

import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="Home" element={<Landing_Page />} />

        <Route path="Profile" element={
          <Layout>
            <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
              <Chip className="text-white font-bold" color="danger" variant="shadow">PROFILE</Chip>
            </main>
          </Layout>
        } />

        <Route path="Payment" element={
          <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
            <Chip className="text-white font-bold" color="success" variant="shadow">PAYMENT</Chip>
          </main>
        } />

        <Route path="PrivacyPolicy" element={
          <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
            <Chip className="text-black font-bold" color="default" variant="shadow">PrivacyPolicy</Chip>
          </main>
        } />

        <Route path="Filter" element={
          <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
            <Chip className="text-white font-bold" color="secondary" variant="shadow">FILTRO</Chip>
          </main>
        } />

        <Route path="Details" element={
          <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
            <Chip className="text-black font-bold" color="warning" variant="shadow">DETALLES</Chip>
          </main>
        } />

        <Route path="Routes" element={
          <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
            <Chip className="text-white font-bold" color="primary" variant="shadow">RUTAS</Chip>
          </main>
        } />

        <Route path="History" element={
          <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
            <Chip className="text-white font-bold" color="primary" variant="shadow">HISTORIAL</Chip>
          </main>
        } />

        <Route path="Settings" element={
          <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
            <Chip className="text-black font-bold" color="default" variant="shadow">Configuraciones</Chip>
          </main>
        } />

        <Route path="Analytics" element={
          <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
            <Chip className="text-white font-bold" color="danger" variant="shadow">Analiticas</Chip>
          </main>
        } />

        <Route path="Menu" element={
          <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
            <Chip className="text-white font-bold" color="warning" variant="shadow">MENU</Chip>
          </main>
        } />

        <Route path="Login" element={
          <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
            <LoginForm />
          </main>
        } />

        <Route path="Register" element={
          <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
            <RegisterForm />
          </main>
        } />

        <Route path="Reservations" element={
          <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
            <Chip className="text-white font-bold" color="secondary" variant="shadow">RESERVASCIONES</Chip>
          </main>
        } />

        <Route path="Reviews" element={
          <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
            <Chip className="text-white font-bold" color="danger" variant="shadow">RESEÑAS</Chip>
          </main>
        } />

        <Route path='/*' element={<Navigate to="/Home" />} />
      </Routes>
    </>
  );
}

export default App;
