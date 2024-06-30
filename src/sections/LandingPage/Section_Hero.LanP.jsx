import IMG_HERO from "../../assets/Img/IMG_Hero02.webp"

export const Section_Hero = () => {
  return (
    <main className="bg-cover bg-[center_bottom_-12rem] w-full min-h-screen" style={{backgroundImage: `url(${IMG_HERO})`}}>
        <div className="w-full min-h-screen bg-gradient-to-b from-[#0A1300]/80 to-[#000000]/5">
            <section className="w-full h-[80vh] px-2 xl:px-32 lg:px-24 md:px-16 sm:px-8 xs:px-6 2xs:px-3 flex flex-col justify-center items-center">

            </section>
            <section className="bg-black/75 w-full h-[20vh] px-2 xl:px-32 lg:px-24 md:px-16 sm:px-8 xs:px-6 2xs:px-3">

            </section>
        </div>
    </main>
  )
}
