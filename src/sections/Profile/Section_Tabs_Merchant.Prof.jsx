import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import { ReservationsMerchants } from "../../components/Reservations-Merchant/ReservationsMerchants";

export const Section_Tabs_Merchant = () => {
  return ( 
        <section className="hidden sm:block max-w-[65%] min-h-screen border-x-2 border-t-2 border-woodLogo/45 bg-gray100 z-10 rounded-t-xl pt-2 ">
            <Tabs radius="full" aria-label="Componente Tabs"
                classNames={{
                base:"flex w-full justify-center font-semibold",
                tabList: "bg-T"
                }}
            >
                <Tab key="Restaurant" title="Mi Restaurante">
                    <Card>
                        <CardBody>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </CardBody>
                    </Card>  
                </Tab>
                <Tab key="Menu" title="Menu">
                    <Card>
                        <CardBody>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </CardBody>
                    </Card>  
                </Tab>
                <Tab  key="Reservaciones" title="Reservaciones">
                    
                    
                    <ReservationsMerchants/>
                    
                   
                </Tab>
            </Tabs>
        </section>
  )
}
