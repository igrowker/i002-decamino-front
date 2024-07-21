import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";

export const Section_Tabs_Merchant = () => {
  return (
        <section className="hidden sm:block w-[100%] min-h-screen border-x-2 border-t-2 border-woodLogo/45 bg-gray100 z-10 rounded-t-xl pt-2">
            <Tabs radius="full" aria-label="Componente Tabs"
                classNames={{
                base:"flex w-full justify-center font-semibold",
                tabList: "bg-greenT"
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
                <Tab key="Reservaciones" title="Reservaciones">
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
