import styles from "./index.module.css"
import { useEffect, useState } from "react"

const NotFound = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.notFoundContainer}>
      <div 
        className={styles.glow}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      ></div>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>Oops! Page not found</p>
      <div className={styles.astronaut}>
        <img src="https://assets.codepen.io/1538474/astronaut.svg" alt="Lost astronaut" />
      </div>
    </div>
  );
};

export default NotFound;