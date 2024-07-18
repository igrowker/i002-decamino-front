import { Img_Profile } from "../../components/Profile/Img_Profile.Prof"


export const Profile = () => {
  return (
    <main className="relative w-full min-h-screen gap-2 bg-gradient-to-r from-gray100 px-2 xl:px-32 lg:px-24 md:px-16 sm:px-8 xs:px-6 2xs:px-3 flex pt-2">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1200]/80 to-[#454545]/5 h-full"></div>
        <section className="w-[100%] min-h-screen border-x-2 border-t-2 border-woodLogo/45 bg-gray100 z-10 rounded-t-xl">

        </section>
        <section className="w-[475px] h-[100vh] border-2 rounded-xl bg-white border-woodLogo/45 z-10">
          <div className="h-full w-full flex gap-2">
            <Img_Profile/>
            
          </div>
        </section>
    </main>
  )
}
