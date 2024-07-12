import { Button, Input } from "@nextui-org/react";

export const Planea_Tu_Ruta = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center w-[90%] md:w-[85%] h-[90%] md:mt-5  ">
        <h2 className="text-white  font-nunito text-[2em] mt-10">
          Planea tu ruta rural
        </h2>
        <form className="flex flex-col md:flex-row gap-5 justify-center items-center mt-16 md:mt-10">
          <div className="w-full">
            <label className="text-white font-nunito font-[200] flex justify-start">
              Primer destino
            </label>
            <Input type="text" placeholder="Ingresar destino" />
          </div>

          <div className="w-full">
            <label className="text-white font-nunito font-[200] flex justify-start">
              Segundo destino
            </label>
            <Input type="text" placeholder="Ingresar destino" />
          </div>
          <div className="w-full">
            <label className="text-white font-nunito font-[200] flex justify-start">
              Día de llegada
            </label>
            <Input type="text" placeholder="Ingresar destino" />
          </div>
          <div className="w-full">
            <label className="text-white font-nunito font-[200] flex justify-start">
              Día de salida
            </label>
            <Input type="text" placeholder="Ingresar destino" />
          </div>
          <Button
            className=" font-nunito text-white font-[600] w-full bg-greenT h-[50px] mt-4 md:mt-4"
            radius="full"
          >
            Buscar
          </Button>
        </form>
      </div>
    </div>
  );
};
