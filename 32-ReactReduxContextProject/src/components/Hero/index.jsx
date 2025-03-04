import { useEffect, useRef } from "react";
import styles from "./index.module.css"
const Hero = () => {
    const imgRef = useRef(null);
    const textRef = useRef(null);
    useEffect(() => {
       
        if (imgRef.current) {
          imgRef.current.classList.add("animate__animated", "animate__bounceIn");
        }
        if(textRef.current){
          textRef.current.classList.add("animate__animated" , "animate__fadeInRight");
        }
      }, []);
    
  return (
    
    <div className="bg-[#C8EBFF] min-h-[80vh] flex items-center">
        <div className="max-w-[1280px] mx-auto">
            <div className={`flex justify-between items-center ${styles.hero}`}>
                <img ref={imgRef} className={`h-auto w-[50%] animate-delay-[0.4s] ${styles.image}`} src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png" alt="" />
                <div ref={textRef} className="animate-delay-[0.4s] h-auto">
                        <h2 className={styles.header}>
                            60% Discount
                        </h2>
                        <h1 className={styles.winter}>Winter Collection</h1>
                        <p className={styles.collection}>Best Cloth Collections by 2020!</p>
                        <button className={styles.shopBtn}>Shop Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero