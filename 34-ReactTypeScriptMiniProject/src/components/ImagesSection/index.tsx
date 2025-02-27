import styles from "./index.module.css";

const ImagesSection = () => {
  return (
    <div className={styles.galleryContainer}>
      <div className={styles.galleryItem}>
        <img
          src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery1.png.webp"
          alt=""
        />
      </div>
      <div className={styles.galleryItem}>
        <img
          src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery2.png.webp"
          alt=""
        />
      </div>
      <div className={`${styles.galleryItem} ${styles.verticalStack}`}>
        <div>
          <img
            src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery3.png.webp"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery4.png.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ImagesSection;
