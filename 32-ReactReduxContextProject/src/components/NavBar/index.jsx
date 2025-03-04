import FavAndBasketBtns from './FavAndBasketBtns'
import Logo from './Logo'
import Navigation from './Navigation'
import TopBlackSide from './TopBlackSide'
import styles from "./index.module.css"

const NavBar = () => {
  return (
    <div>
        <TopBlackSide/>
        <div>
          <div className='max-w-[1280px] mx-auto'>
              <div className={`${styles.navbar} flex justify-between items-center py-5`}>
                <Logo/>
                <Navigation/>
                <FavAndBasketBtns/>
              </div>
          </div>
        </div>
    </div>
  )
}

export default NavBar