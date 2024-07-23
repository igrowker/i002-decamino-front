import { useEffect, useState } from "react";
import { ReservationsSlider } from "./ReservationsSlider";
import { axios_JSON_Send } from "../../services/peticiones_back";
import { CircularProgress} from "@nextui-org/react";
// import { useSelector } from "react-redux";



export const ReservationsMerchants = () => {
  const [reservationsData, setReservationsData] = useState([]);

  const [actives, setActives] = useState([])
  const [finished, setFinished] = useState([])
  const [cancelled, setCancelled] = useState([])

  const [loading, setLoading] = useState(false);

  // const { token } = useSelector((state) => state.authLogin);

  const fetchReservationData = async () => {
    
    try {

      setLoading(true);

      const response = await axios_JSON_Send({
        method: "get",
        url: `/api/reservations/restaurant`,
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OWM0MWFmZmRkNGNhNzJmMjgyZDVkMyIsInVzZXJuYW1lIjoiTGEgQ29sb25pYWwiLCJlbWFpbCI6ImNvbG9uaWFsQGdtYWlsLmNvbSIsInR3b0ZhY3RvckVuYWJsZWQiOmZhbHNlLCJyb2xlIjoibWVyY2hhbnQiLCJwcm9maWxlSW1nIjoiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHc3bnZranh4L2ltYWdlL3VwbG9hZC92MTcxNzU0MTU1MS9FbXBsZW9zLUZvcm1vc2EvUHJvZmlsZS1JTUcvVDEwX2Fqa2R0Yi5wbmciLCJoaXN0b3J5IjpbXSwiaWF0IjoxNzIxNTE2NDg0LCJleHAiOjE3MjIxMjEyODR9.A8aWW5_cv92SRMuL_KwHHl52JukntEB7Jw_bp1x97KA",
      });
      setReservationsData(response);
      const today = new Date();

      const actives = response.filter((reserv) => {
        const reservationDate = new Date(reserv.date);
        return (reserv.status === "confirmada" || reserv.status === "pendiente") && reservationDate >= today;
      });

      const finished = response.filter((reserv) => {
        const reservationDate = new Date(reserv.date);
        return reservationDate < today;
      });

      const cancelled = response.filter((reserv) => {
        const reservationDate = new Date(reserv.date);
        return reserv.status === "cancelada" && reservationDate >= today;
      });

      setActives(actives);
      setCancelled(cancelled);
      setFinished(finished);
      
      setLoading(false);
      
    } catch (error) {
      console.error("Error al obtener los datos de reserva", error);
      setLoading(false);
    }
  };

  const cancelReservation=async(id)=>{
    try {
      await axios_JSON_Send({
        data:{status : "cancelada"},
        method: "put",
        url: `/api/reservations/${id}`,
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OWM0MWFmZmRkNGNhNzJmMjgyZDVkMyIsInVzZXJuYW1lIjoiTGEgQ29sb25pYWwiLCJlbWFpbCI6ImNvbG9uaWFsQGdtYWlsLmNvbSIsInR3b0ZhY3RvckVuYWJsZWQiOmZhbHNlLCJyb2xlIjoibWVyY2hhbnQiLCJwcm9maWxlSW1nIjoiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHc3bnZranh4L2ltYWdlL3VwbG9hZC92MTcxNzU0MTU1MS9FbXBsZW9zLUZvcm1vc2EvUHJvZmlsZS1JTUcvVDEwX2Fqa2R0Yi5wbmciLCJoaXN0b3J5IjpbXSwiaWF0IjoxNzIxNTE2NDg0LCJleHAiOjE3MjIxMjEyODR9.A8aWW5_cv92SRMuL_KwHHl52JukntEB7Jw_bp1x97KA",
      });
      fetchReservationData();
    } catch (error) {
      console.log(error,"No se pudo cancelar la reserva")
    }
  }

  const confirmReservation=async(id)=>{
    try {
      await axios_JSON_Send({
        data:{status : "confirmada"},
        method: "put",
        url: `/api/reservations/${id}`,
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OWM0MWFmZmRkNGNhNzJmMjgyZDVkMyIsInVzZXJuYW1lIjoiTGEgQ29sb25pYWwiLCJlbWFpbCI6ImNvbG9uaWFsQGdtYWlsLmNvbSIsInR3b0ZhY3RvckVuYWJsZWQiOmZhbHNlLCJyb2xlIjoibWVyY2hhbnQiLCJwcm9maWxlSW1nIjoiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHc3bnZranh4L2ltYWdlL3VwbG9hZC92MTcxNzU0MTU1MS9FbXBsZW9zLUZvcm1vc2EvUHJvZmlsZS1JTUcvVDEwX2Fqa2R0Yi5wbmciLCJoaXN0b3J5IjpbXSwiaWF0IjoxNzIxNTE2NDg0LCJleHAiOjE3MjIxMjEyODR9.A8aWW5_cv92SRMuL_KwHHl52JukntEB7Jw_bp1x97KA",
      });
      fetchReservationData();
    } catch (error) {
      console.log(error,"No se pudo confirmar la reserva")
    }
  }
  
  useEffect(() => {
    fetchReservationData();

  }, []);

  

  if (reservationsData.length === 0 && loading === false) {
    return (
      <div className="flex justify-center mt-10">
        <h1 className="text-2xl">No ha hecho reservas todavía</h1>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center mt-10">
        <CircularProgress color="success" aria-label="Loading..."/>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col justify-center p-2">
      <h2 className="text-2xl flex justify-center">Reservaciones</h2>

      <h3 className="text-xl flex justify-center md:justify-start">Activas</h3>
      <ReservationsSlider reservationsData={actives} confirmReservation={confirmReservation} cancelReservation={cancelReservation} />
      <div className="my-1 border-t-2 border-gray-300 border-dashed"></div>
      <h3 className="text-xl flex justify-center md:justify-start">
        Terminadas
      </h3>
      <ReservationsSlider reservationsData={finished}  />
      <div className="my-1 border-t-2 border-gray-300 border-dashed"></div>
      <h3 className="text-xl flex justify-center md:justify-start">
        Canceladas
      </h3>
      <ReservationsSlider reservationsData={cancelled}  />
    </div>
  );
};
