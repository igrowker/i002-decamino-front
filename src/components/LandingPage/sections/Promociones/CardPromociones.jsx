import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import IMG_Prompciones_01 from "../../../../assets/Img/Promociones_01.webp";

export const CardPromociones = () => {
  return (
    <Card
      radius="lg"
      className="border-none shadow-xl shadow-gray-500 h-200 max-h-[200px] overflow-hidden"
    >
      <Image
        alt="Promocion 05"
        height={200}
        src={IMG_Prompciones_01}
        width={1000}
        className="origin-bottom w-full"
      />
      <CardFooter className="justify-between bg-black/55 border-black/70 border-1 overflow-hidden absolute rounded-large bottom-0 w-full shadow-small z-10">
        <div>
          <h4 className="text-freshMint text-tiny">Lorem</h4>
          <p className="text-lg font-bold text-white">$4500</p>
        </div>
        <Button
          className="bg-greenT font-bold text-tiny text-white"
          radius="lg"
          size="sm"
        >
          Ver sitio
        </Button>
      </CardFooter>
    </Card>
  );
};
