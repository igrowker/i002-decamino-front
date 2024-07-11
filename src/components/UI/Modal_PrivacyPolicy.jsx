import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCookieAcceptance } from "../../store/modal.slice";
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
import logo from "/logosinFondo.png";
import logo_white from "/logo.png"

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
          backdrop="opaque"
          size="3xl"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          isDismissable={false}
          placement="auto"
          classNames={{
            backdrop: "bg-gradient-to-br from-[#94B9FF] to-[#CDFFD8] backdrop-opacity-40",
            base: "max-h-screen",
            header: "h-[15%]",
            body:"h-[70%] overflow-y-scroll pb-12 bg-gray100/45",
            footer:"h-[15%] relative"
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex justify-center items-end gap-1 border-b-2 border-woodLogo">
                  <Image src={logo_white} width={120} height={60} alt="Logo" />
                </ModalHeader>
                <ModalBody>
                  <h1 className="text-center text-2xl font-bold">¡🍪 COOKIES 🍪!</h1>
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
                    {`Cualquier información que no se encuadre en esa descripción,
                    deberá ser considerada "información no personal". Si
                    almacenamos sus informaciones personales con informaciones
                    no personales, esta combinación será considerada como
                    "informaciones personales". Si excluimos todas las
                    informaciones personales de un conjunto de datos, los datos
                    restantes deben ser considerados informaciones no
                    personales.`}
                  </p>
                </ModalBody>
                <ModalFooter className="bg-woodLogo ">
                  <div className="absolute top-[-46px] w-full left-0">
                    <img className="w-[60px] h-[56px]" src={logo} alt="DeCamino" />
                  </div>
                  <Button 
                    onPress={onClose}
                    onClick={handleClose}
                    className="text-black bg-gray300/85"
                  >
                    No Acepto
                  </Button>
                  <Button 
                    className="bg-freshMint font-bold text-white"
                    onPress={onClose}
                    onClick={handleClose}
                  >
                    Acepto
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
