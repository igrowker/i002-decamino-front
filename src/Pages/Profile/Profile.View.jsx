import { useSelector } from "react-redux"

import { Section_Tabs_Traveler } from "../../sections/Profile/Section_Tabs_Traveler.Prof"
import { Section_Tabs_Traveler_Mobil } from "../../sections/Profile/Section_Tabs_Traveler_Mobil.Prof"
import { Section_MyInformation } from "../../sections/Profile/Section_MyInformation.Prof"
import { Section_Tabs_Merchant } from "../../sections/Profile/Section_Tabs_Merchant.Prof"
import { Section_Tabs_Merchant_Mobil } from "../../sections/Profile/Section_Tabs_Merchant_Mobil.Prof"

export const Profile = () => {

  const user_profile = useSelector((state) => state.authLogin.user)

  if(user_profile.role == "traveler"){

    return (
      <main className={`relative w-full min-h-screen sm:bg-gray100 px-0 xl:px-32 lg:px-24 md:px-16 sm:px-8 flex flex-col sm:flex-row gap-0 sm:gap-2 pt-0 sm:pt-2`}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1200]/80 to-[#454545]/5 h-full"></div>
          <Section_Tabs_Traveler/>
          <Section_MyInformation/>
          <Section_Tabs_Traveler_Mobil/>
      </main>
    )
  }else{
    return (
      <main className={`relative w-full min-h-screen sm:bg-gray100 px-0 xl:px-32 lg:px-24 md:px-16 sm:px-8 flex flex-col sm:flex-row gap-0 sm:gap-2 pt-0 sm:pt-2`}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1200]/80 to-[#454545]/5 h-full"></div>
          <Section_Tabs_Merchant/>
          <Section_MyInformation/>
          <Section_Tabs_Merchant_Mobil/>
      </main>
    )
  }

}
