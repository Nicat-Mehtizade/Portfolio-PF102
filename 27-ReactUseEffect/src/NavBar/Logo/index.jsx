import "./index.css"
import photo from '../../assets/5606108.png';
const Logo = () => {
  return (
    <div className="logo">
        <img className="bookLogo" src={photo} alt="" />
        <h1>BOOKS</h1>
    </div>
  )
}

export default Logo