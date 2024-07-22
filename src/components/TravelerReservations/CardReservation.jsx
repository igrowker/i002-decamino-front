import { Button } from "@nextui-org/react";
import PropTypes from "prop-types";
import {  FaTrashAlt } from "react-icons/fa";

const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);
    const formattedTime = date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
    return `${formattedDate} a las ${formattedTime}`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'aceptada':
        return 'bg-green-500';
      case 'pendiente':
        return 'bg-yellow-500';
      case 'cancelada':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };  


export const CardReservation = ({ reservation,cancelReservation }) => {
    const formattedDateTime = formatDateTime(reservation.date);
    const statusColor = getStatusColor(reservation.status);

    
    

    return (
        <div className="bg-white p-2 md:p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2 flex justify-center">
          Nombre restaurante
        </h2>
  
        <div className="flex mb-4">
          <div>
            <p>
              Para <span>{reservation.numberOfPeople}</span> personas.
            </p>
            <p className="text-gray-700 flex items-center">
              Estado: 
              <span className={`inline-block w-4 h-4 rounded-full ${statusColor} ml-2`}></span>
              <span className="ml-2">{reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}</span>
            </p>
            <p>Reservado para el día: <span>{formattedDateTime}</span></p>
          </div>
  
          <div className="ml-auto">
            <Button onClick={() => cancelReservation(reservation._id)} isIconOnly color="danger" aria-label="Eliminar">
              <FaTrashAlt />
            </Button>
          </div>
        </div>
      </div>
    );
};

CardReservation.propTypes = {
  reservation: PropTypes.shape({
    createdAt: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    numberOfPeople: PropTypes.number.isRequired,
    restaurant: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  cancelReservation: PropTypes.func.isRequired,
};

