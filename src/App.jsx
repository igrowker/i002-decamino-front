import { Button, Chip } from "@nextui-org/react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import { Layout_Public } from "./layouts/Layout_Public";
import { Public_Routes } from "./Routes/Public_Routes";
import { Private_Routes } from "./Routes/Private_Routes";

import { logout } from "./store/auth.slice";
import { useDispatch } from "react-redux";

import { Landing_Page } from "./Pages/LandingPage/Landing_Page.View";
import LoginForm from "./Pages/Login/LoginForm.View";
import RegisterForm from "./Pages/Register/RegisterForm.View";

import { RestaurantDetail } from "./Pages/RestaurantDetails/RestaurantDetail.View";
import { RoutePlanner } from "./Pages/Route/RoutePlanner.View";
import { AboutUs } from "./Pages/AboutUsPage/AboutUs_Page.View";

function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route path="Home" element={
          <Public_Routes>
            <Landing_Page />
          </Public_Routes>
        } />

        <Route path="/Nosotros" element={
          <Layout_Public>
            <AboutUs/>
          </Layout_Public>
        }/>

        <Route path="Profile" element={
          <Private_Routes>
            <Layout_Public>
              <main className="w-full h-screen gap-4 bg-gray-800 flex flex-col justify-center items-center">
                <h1 className="text-white/80 bg-red-600/45 border-2 rounded-lg border-white/65 px-8 py-2 text-lg font-bold">PROFILE</h1>
                <Button className="text-white font-bold" color="danger" variant="shadow"
                onClick={()=>{dispatch(logout()); navigate("/Profile")}}
                >Cerrar Sesión
                </Button>
              </main>
            </Layout_Public>
          </Private_Routes>
        } />

        <Route path="Payment" element={
          <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
            <Chip className="text-white font-bold" color="success" variant="shadow">PAYMENT</Chip>
          </main>
        } />

        <Route path="Filter" element={
          <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
            <Chip className="text-white font-bold" color="secondary" variant="shadow">FILTRO</Chip>
          </main>
        } />

        <Route path="Details" element={
          <Route path="Details" element={<RestaurantDetail />}></Route>
        } />

        <Route path="Routes" element={<RoutePlanner />}></Route>

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
          <Public_Routes>
            <Layout_Public>
              <LoginForm/>
            </Layout_Public>
          </Public_Routes>
        } />

        <Route path="Register" element={
          <Public_Routes>
            <Layout_Public>
              <RegisterForm/>
            </Layout_Public>
          </Public_Routes>
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
