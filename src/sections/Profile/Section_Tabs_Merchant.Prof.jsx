import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import { MyCommerce } from "../../components/Profile/MyCommerce.Prof";

export const Section_Tabs_Merchant = () => {
  return (
        <section className="hidden sm:block w-full max-w-full overflow-hidden min-h-screen border-x-2 border-t-2 border-woodLogo/45 bg-gray100 z-10 rounded-t-xl pt-2">
            <Tabs radius="full" aria-label="Componente Tabs"
                classNames={{
                base:"flex w-full justify-center font-semibold",
                tabList: "bg-greenT"
                }}
            >
                <Tab key="Commerce" title="Mi Comercio">
                    <Card className="flex max-w-full overflow-hidden">
                        <MyCommerce/>
                    </Card>  
                </Tab>
                <Tab key="Menu" title="Menu">
                    <Card>
                        <CardBody>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </CardBody>
                    </Card>  
                </Tab>
                <Tab key="Reservations" title="Reservaciones">
                    <Card>
                        <CardBody>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </CardBody>
                    </Card>  
                </Tab>
            </Tabs>
        </section>
  )
}
