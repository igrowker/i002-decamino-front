import { Chip } from "@nextui-org/react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Landing_Page } from "./Pages/LandingPage/Landing_Page.View";
import { PrivacyPolicy } from "./components/UI/Modal_PrivacyPolicy";
import { RestaurantDetail } from "./Pages/RestaurantDetails/RestaurantDetail.View";
import { RoutePlanner } from "./Pages/Route/RoutePlanner.View";

function App() {
  return (
    <>
      <Routes>
        <Route path="Home" element={<Landing_Page />}></Route>

        <Route
          path="Profile"
          element={
            <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
              <Chip
                className="text-white font-bold"
                color="danger"
                variant="shadow"
              >
                PROFILE
              </Chip>
            </main>
          }
        ></Route>

        <Route
          path="Payment"
          element={
            <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
              <Chip
                className="text-white font-bold"
                color="success"
                variant="shadow"
              >
                PAYMENT
              </Chip>
            </main>
          }
        ></Route>

        <Route path="PrivacyPolicy" element={<PrivacyPolicy />}></Route>

        <Route
          path="Filter"
          element={
            <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
              <Chip
                className="text-white font-bold"
                color="secondary"
                variant="shadow"
              >
                FILTRO
              </Chip>
            </main>
          }
        ></Route>

        <Route path="Details" element={<RestaurantDetail />}></Route>

        <Route path="Routes" element={<RoutePlanner />}></Route>

        <Route
          path="History"
          element={
            <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
              <Chip
                className="text-white font-bold"
                color="primary"
                variant="shadow"
              >
                HISTORIAL
              </Chip>
            </main>
          }
        ></Route>

        <Route
          path="Settings"
          element={
            <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
              <Chip
                className="text-black font-bold"
                color="default"
                variant="shadow"
              >
                Configuraciones
              </Chip>
            </main>
          }
        ></Route>

        <Route
          path="Analytics"
          element={
            <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
              <Chip
                className="text-white font-bold"
                color="danger"
                variant="shadow"
              >
                Analiticas
              </Chip>
            </main>
          }
        ></Route>

        <Route
          path="Menu"
          element={
            <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
              <Chip
                className="text-white font-bold"
                color="warning"
                variant="shadow"
              >
                MENU
              </Chip>
            </main>
          }
        ></Route>

        <Route
          path="Login"
          element={
            <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
              <Chip
                className="text-white font-bold"
                color="primary"
                variant="shadow"
              >
                Inicio de Sesion
              </Chip>
            </main>
          }
        ></Route>

        <Route
          path="Register"
          element={
            <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
              <Chip
                className="text-white font-bold"
                color="secondary"
                variant="shadow"
              >
                REGISTRO
              </Chip>
            </main>
          }
        ></Route>

        <Route
          path="Reservations"
          element={
            <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
              <Chip
                className="text-white font-bold"
                color="secondary"
                variant="shadow"
              >
                RESERVASCIONES
              </Chip>
            </main>
          }
        ></Route>

        <Route
          path="Reviews"
          element={
            <main className="w-full h-screen bg-gray-800 flex justify-center items-center">
              <Chip
                className="text-white font-bold"
                color="danger"
                variant="shadow"
              >
                RESEÑAS
              </Chip>
            </main>
          }
        ></Route>

        <Route path="/*" element={<Navigate to="/Home" />} />
      </Routes>
    </>
  );
}

export default App;
