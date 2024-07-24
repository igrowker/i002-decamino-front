import { useEffect, useState } from "react";
import { ReservationsSlider } from "./ReservationsSlider";
import { axios_JSON_Send } from "../../services/peticiones_back";
import { CircularProgress} from "@nextui-org/react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";



export const ReservationsMerchants = () => {
  const [reservationsData, setReservationsData] = useState([]);

  const [actives, setActives] = useState([])
  const [finished, setFinished] = useState([])
  const [cancelled, setCancelled] = useState([])

  const [loading, setLoading] = useState(false);

  const { token } = useSelector((state) => state.authLogin);

  const fetchReservationData = async () => {
    
    try {

      setLoading(true);

      const response = await axios_JSON_Send({
        method: "get",
        url: `/api/reservations/restaurant`,
        token: token,
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

  const cancelReservation = async (id) => {
    const result = await Swal.fire({
      title: '¿Cancelar esta reserva?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, cancelar!',
      cancelButtonText: 'No, mantener'
    });
  
    if (result.isConfirmed) {
      try {
        await axios_JSON_Send({
          method: 'put',
          url: `/api/reservations/${id}`,
          token: token,
          data: { status: "cancelada" }
        });
        Swal.fire(
          'Cancelada!',
          'La reserva ha sido cancelada.',
          'success'
        );
        fetchReservationData();
      } catch (error) {
        console.log(error, "No se pudo cancelar la reserva");
        Swal.fire(
          'Error!',
          'No se pudo cancelar la reserva.',
          'error'
        );
      }
    }
  };

  const confirmReservation = async (id) => {
    const result = await Swal.fire({
      title: '¿Confirmar reserva?',
      text: "¡Esta acción confirmará la reserva!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7ACAB4',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, confirmar!',
      cancelButtonText: 'No, cancelar'
    });
  
    if (result.isConfirmed) {
      try {
        await axios_JSON_Send({
          data: { status: "confirmada" },
          method: "put",
          url: `/api/reservations/${id}`,
          token: token,
        });
        Swal.fire(
          'Confirmada!',
          'La reserva ha sido confirmada.',
          'success'
        );
        fetchReservationData();
      } catch (error) {
        console.log(error, "No se pudo confirmar la reserva");
        Swal.fire(
          'Error!',
          'No se pudo confirmar la reserva.',
          'error'
        );
      }
    }
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
