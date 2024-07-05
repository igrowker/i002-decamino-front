import { Card, CardFooter } from "@nextui-org/react";
import IMG_Promociones_05 from "../../../../assets/Img/Promociones_05.webp";

export const CardPromociones = () => {
  return (
    <Card
      radius="lg"
      className=" h-[350px] md:h-[361px] shadow-sm shadow-gray-500 overflow-hidden"
    >
      <div className="relative w-full h-full">
        <img
          alt="Promocion 05"
          src={IMG_Promociones_05}
          className="w-full h-full object-cover"
        />
      </div>
      <CardFooter className="justify-between bg-black/55 border-black/70 border-1 overflow-hidden absolute bottom-0 w-full shadow-small z-10">
        <div>
          <h4 className="text-freshMint text-md font-nunito">Lorem ipsum</h4>
          <div className="flex items-center ">
            <p className="text-lg font-bold text-white">$4500</p>
            <p className="text-freshMint text-md mx-2 font-nunito">Precio por persona</p>
          </div>
        </div>
       
      </CardFooter>
    </Card>
  );
};
