import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCookieAcceptance } from "../store/modalSlice";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Image
} from "@nextui-org/react";

export const PrivacyPolicy = () => {
  const dispatch = useDispatch();
  const cookieAcceptance = useSelector((state) => state.modal);
  console.log(cookieAcceptance);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Verifica si el usuario ha aceptado las cookies al cargar la página
  useEffect(() => {
    const acceptedCookies = sessionStorage.getItem("acceptedCookies");
    if (acceptedCookies !== null) {
      dispatch(setCookieAcceptance(JSON.parse(acceptedCookies)));
    }
    console.log(acceptedCookies);
  }, [dispatch]);

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  // Guarda la preferencia del usuario en sessionStorage y actualiza el estado de Redux
  const handleClose = () => {
    sessionStorage.setItem("acceptedCookies", JSON.stringify(true));
    dispatch(setCookieAcceptance(true));
  };

  if (cookieAcceptance === null || cookieAcceptance === false) {
    return (
      <>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          isDismissable={false}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Cookies
                </ModalHeader>
                <ModalBody>
                <Image src="src\assets\6.png" width={100} height={40} alt="Logo" />
                  <p>
                    Nos importa su privacidad. El uso que hacemos de la
                    información que recopila DeCamino (es decir, nosotros) se
                    recoge en la <b>Política de privacidad de DeCamino.</b>
                  </p>
                  <p>
                    Nosotros utilizamos la expresión «información personal» para
                    referirnos a la información que le identifica directamente
                    (p. ej., su nombre, dirección de correo electrónico o
                    información de facturación) o podría estar razonablemente
                    vinculada con usted o ser utilizada de forma combinada para
                    identificarle (p. ej., el número de identificación de una
                    cuenta o dirección IP). Siempre le informaremos sobre qué
                    información personal recopilamos sobre usted. Consulte el
                    Aviso de privacidad de cada producto para obtener
                    información detallada.
                  </p>
                  <p>
                    Cualquier información que no se encuadre en esa descripción,
                    deberá ser considerada "información no personal". Si
                    almacenamos sus informaciones personales con informaciones
                    no personales, esta combinación será considerada como
                    "informaciones personales". Si excluimos todas las
                    informaciones personales de un conjunto de datos, los datos
                    restantes deben ser considerados informaciones no
                    personales.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button 
                    
                    variant="light"
                    onPress={onClose}
                    onClick={handleClose}
                  >
                    No Acepto
                  </Button>
                  <Button className="bg-freshMint"
                    
                    onPress={onClose}
                    onClick={handleClose}
                  >
                    <b>Acepto</b>
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }

  return null;
};
