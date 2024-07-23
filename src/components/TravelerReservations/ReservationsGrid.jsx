import { CardReservation } from "./CardReservation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { axios_JSON_Send } from "../../services/peticiones_back";
import { CircularProgress } from "@nextui-org/react";
import Swal from "sweetalert2";



export const ReservationsGrid = () => {
  const [reservationsData, setReservationsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { token } = useSelector((state) => state.authLogin);

  const fetchReservationData = async () => {
      setLoading(true);
    try {
      const response = await axios_JSON_Send({
        method: "get",
        url: `/api/reservations`,
        token: token,
      });
      
       
    const sortedReservations = response.sort((a, b) => {
      const order = { aceptada: 1, pendiente: 2, cancelada: 3 };

      const stateComparison = order[a.status] - order[b.status];
      if (stateComparison !== 0) {
        return stateComparison;
      }

      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA - dateB;
    });
  
    
      setReservationsData(sortedReservations);
      setLoading(false);
      
    } catch (error) {
      console.error("Error al obtener los datos de reserva", error);
      setLoading(false);
    }
  };

  const cancelReservation = async (id) => {
    Swal.fire({
      title: '¿Estás seguro de cancelar?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, cancelar',
      cancelButtonText: 'No, mantener'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios_JSON_Send({
            method: "put",
            url: `/api/reservations/${id}/cancel`,
            token: token,
          });
          fetchReservationData();
          Swal.fire(
            '¡Cancelado!',
            'Tu reserva ha sido cancelada.',
            'success'
          );
        } catch (error) {
          console.log(error, "no se pudo cancelar la reserva");
        }
      }
    });
  };


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
    <div className="flex justify-center p-4 ">
      <div className="grid gap-4 w-full max-w-screen-md">
        {reservationsData.map((reserv) => (
          <CardReservation key={reserv._id}  reservation={reserv} cancelReservation={cancelReservation}   />
        ))}
      </div>
    </div>
  );
};
