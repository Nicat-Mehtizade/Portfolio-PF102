import Hero from "../../components/Hero"
import ImagesSection from "../../components/ImagesSection"
import NewArrivals from "../../components/NewArrivals"
import WatchesSection from "../../components/WatchesSection"

const Home = () => {
  return (
    <div>
      <Hero/>
      <NewArrivals/>
      <ImagesSection/>
      <WatchesSection/>
    </div>
  )
}

export default Home