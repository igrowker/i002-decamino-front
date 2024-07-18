import { useState } from "react";
import PropTypes from "prop-types";
import {
  Modal,
  ModalContent,
  ModalHeader,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { useSelector } from "react-redux";
import { axios_JSON_Send } from "../../services/peticiones_back";

export const ModalReservations = ({ children }) => {
  const [dateTime, setDateTime] = useState("");
  const [people, setPeople] = useState(1);


  const{token,user}=useSelector(state=>state.authLogin)
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
  

  const handleDateChange = (e) => {
    const value = e.target.value;
    setDateTime(value);
  };

  const handleNumberChange = (e) => {
    const value = e.target.value;
    setPeople(value);
  };
  
  const handleSubmit = async () => {
    if (dateTime === "") return;
  
  const dateSelected = new Date(dateTime);

  const year = dateSelected.getUTCFullYear();
  const month = String(dateSelected.getUTCMonth() + 1).padStart(2, '0')
  const day = String(dateSelected.getUTCDate()).padStart(2, '0');
  const hours = String(dateSelected.getUTCHours()).padStart(2, '0');
  const minutes = String(dateSelected.getUTCMinutes()).padStart(2, '0');

  
  const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}Z`;


    try {
        const response = await axios_JSON_Send({
            data: { date: formattedDateTime, numberOfPeople:people }, 
            method: "post", 
            url: `/api/reservations/restaurant/${user.id}`, // Reemplaza con el ID de tu restaurante
            token : token
          })

          console.log(response)
        
    } catch (error) {
        console.log("error al hacer reserva",error)
    }
  };

  return (
    <>
      <Button onPress={onOpen}>{children}</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        size="full"
        
      >
        <ModalContent>
          {(onClose) => (
            <>
              <div className="flex justify-center mt-10 mb-8">
                <ModalHeader className="">Nombre Restaurante</ModalHeader>
              </div>
              <div className="flex flex-col justify-center gap-4 items-center px-4">
                <Input
                  type="datetime-local"
                  value={dateTime}
                  onChange={handleDateChange}
                  className="w-full md:w-[350px]"
                />
                <Input
                  type="number"
                  value={people}
                  onChange={handleNumberChange}
                  min="1"
                  max="20"
                  className="w-full md:w-[350px]"
                />

                <div className="flex gap-4 mt-6">
                  <Button variant="flat" onPress={onClose}>
                    Cancelar
                  </Button>
                  <Button
                    className="bg-greenT"
                    disabled={dateTime === ""}
                    onClick={handleSubmit}
                  >
                    Reservar
                  </Button>
                </div>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

ModalReservations.propTypes = {
  children: PropTypes.node.isRequired,
};
