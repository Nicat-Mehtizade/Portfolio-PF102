import Hero from "../../components/Hero"
import ImagesSection from "../../components/ImagesSection"
import InfoSection from "../../components/InfoSection"
import NewArrivals from "../../components/NewArrivals"
import WatchesSection from "../../components/WatchesSection"
import WatchOfChoice from "../../components/WatchOfChoice"

const Home = () => {
  return (
    <div>
      <Hero/>
      <NewArrivals/>
      <ImagesSection/>
      <WatchesSection/>
      <WatchOfChoice/>
      <InfoSection/>
    </div>
  )
}

export default Home