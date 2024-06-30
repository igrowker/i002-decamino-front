import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import IMG_Prompciones_01 from "../../assets/Img/Promociones_01.webp"
import IMG_Prompciones_02 from "../../assets/Img/Promociones_02.webp"
import IMG_Prompciones_03 from "../../assets/Img/Promociones_03.webp"
import IMG_Prompciones_04 from "../../assets/Img/Promociones_04.webp"
import IMG_Prompciones_05 from "../../assets/Img/Promociones_05.webp"

export const Section_Promociones = () => {
  return (
    <main className="bg-gray100 w-full px-2 xl:px-32 lg:px-24 md:px-16 sm:px-8 xs:px-6 2xs:px-3">
        <section className="py-8 ">
            <h4 className="text-freshMint text-md">MEJORES OFERTAS</h4>
            <h1 className="text-2xl font-bold">Promociones imperdibles</h1>
            <div className="py-8 grid grid-cols-3 gap-4">
                <article className="col-span-2">
                    <Card
                    radius="lg"
                    className="border-none shadow-xl shadow-gray-500 h-200 max-h-[200px] overflow-hidden"
                    >
                        <Image
                            alt="Promocion 01"
                            height={200}
                            src={IMG_Prompciones_01}
                            width={1000}
                            className="origin-bottom w-full translate-y-[-60%]"
                        />
                        <CardFooter className="justify-between bg-black/55 border-black/70 border-1 overflow-hidden absolute rounded-large bottom-0 w-full shadow-small z-10">
                            <div>
                                <h4 className="text-freshMint text-tiny">Lorem</h4>
                                <p className="text-lg font-bold text-white">$4500</p>
                            </div>
                            <Button className="bg-greenT font-bold text-tiny text-white" radius="lg" size="sm">
                                Ver sitio
                            </Button>
                        </CardFooter>
                    </Card>
                </article>
                <article className="col-span-1">
                    <Card
                    radius="lg"
                    className="border-none shadow-xl shadow-gray-500 h-200 max-h-[200px] overflow-hidden"
                    >
                        <Image
                            alt="Promocion 02"
                            height={200}
                            src={IMG_Prompciones_02}
                            width={1000}
                            className="origin-bottom w-full"
                        />
                        <CardFooter className="justify-between bg-black/55 border-black/70 border-1 overflow-hidden absolute rounded-large bottom-0 w-full shadow-small z-10">
                            <div>
                                <h4 className="text-freshMint text-tiny">Lorem</h4>
                                <p className="text-lg font-bold text-white">$4500</p>
                            </div>
                            <Button className="bg-greenT font-bold text-tiny text-white" radius="lg" size="sm">
                                Ver sitio
                            </Button>
                        </CardFooter>
                    </Card>
                </article>
                <article className="col-span-1">
                    <Card
                    radius="lg"
                    className="border-none shadow-xl shadow-gray-500 h-200 max-h-[200px] overflow-hidden"
                    >
                        <Image
                            alt="Promocion 03"
                            height={200}
                            src={IMG_Prompciones_03}
                            width={1000}
                            className="origin-bottom w-full"
                        />
                        <CardFooter className="justify-between bg-black/55 border-black/70 border-1 overflow-hidden absolute rounded-large bottom-0 w-full shadow-small z-10">
                            <div>
                                <h4 className="text-freshMint text-tiny">Lorem</h4>
                                <p className="text-lg font-bold text-white">$4500</p>
                            </div>
                            <Button className="bg-greenT font-bold text-tiny text-white" radius="lg" size="sm">
                                Ver sitio
                            </Button>
                        </CardFooter>
                    </Card>
                </article>
                <article className="col-span-1">
                    <Card
                    radius="lg"
                    className="border-none shadow-xl shadow-gray-500 h-200 max-h-[200px] overflow-hidden"
                    >
                        <Image
                            alt="Promocion 04"
                            height={200}
                            src={IMG_Prompciones_04}
                            width={1000}
                            className="origin-bottom w-full"
                        />
                        <CardFooter className="justify-between bg-black/55 border-black/70 border-1 overflow-hidden absolute rounded-large bottom-0 w-full shadow-small z-10">
                            <div>
                                <h4 className="text-freshMint text-tiny">Lorem</h4>
                                <p className="text-lg font-bold text-white">$4500</p>
                            </div>
                            <Button className="bg-greenT font-bold text-tiny text-white" radius="lg" size="sm">
                                Ver sitio
                            </Button>
                        </CardFooter>
                    </Card>
                </article>
                <article className="col-span-1">
                    <Card
                    radius="lg"
                    className="border-none shadow-xl shadow-gray-500 h-200 max-h-[200px] overflow-hidden"
                    >
                        <Image
                            alt="Promocion 05"
                            height={200}
                            src={IMG_Prompciones_05}
                            width={1000}
                            className="origin-bottom w-full"
                        />
                        <CardFooter className="justify-between bg-black/55 border-black/70 border-1 overflow-hidden absolute rounded-large bottom-0 w-full shadow-small z-10">
                            <div>
                                <h4 className="text-freshMint text-tiny">Lorem</h4>
                                <p className="text-lg font-bold text-white">$4500</p>
                            </div>
                            <Button className="bg-greenT font-bold text-tiny text-white" radius="lg" size="sm">
                                Ver sitio
                            </Button>
                        </CardFooter>
                    </Card>
                </article>
            </div>
            
        </section>
    </main>
  )
}
