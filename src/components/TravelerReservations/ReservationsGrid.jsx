import { CardReservation } from "./CardReservation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { axios_JSON_Send } from "../../services/peticiones_back";
import { CircularProgress } from "@nextui-org/react";

export const ReservationsGrid = () => {
  const [reservationsData, setReservationsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { token } = useSelector((state) => state.authLogin);

  const cancelReservation=async(id)=>{
    try {
        const response = await axios_JSON_Send({
            method: "put",
            url: `/api/reservations/${id}/cancel`,
            token: token,
          });
          console.log(response)
    } catch (error) {
        console.log(error,"no se pudo cancelar la reserva")
    }
  }

  useEffect(() => {
    
    setLoading(true);

    const fetchReservationData = async () => {
      try {
        const response = await axios_JSON_Send({
          method: "get",
          url: `/api/reservations`,
          token: token,
        });
        setReservationsData(response);
        setLoading(false);
        
      } catch (error) {
        console.error("Error al obtener los datos de reserva", error);
        setLoading(false);
      }
    };

    fetchReservationData();
  }, []);



  if (reservationsData.length === 0 && loading === false) {
    return (
      <div className="flex justify-center">
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
    <div className="flex justify-center p-4 ">
      <div className="grid gap-4 w-full max-w-screen-md">
        {reservationsData.map((reserv) => (
          <CardReservation key={reserv._id} reservation={reserv} cancelReservation={cancelReservation}  />
        ))}
      </div>
    </div>
  );
};
