import { useState, useEffect } from "react";
// import Image from "next/image";

import styles from "../styles/Gallery.module.scss";
import Layout from "../Layout";

const loremPicsums = [
  "https://picsum.photos/200/300",
  "https://picsum.photos/201/300",
  "https://picsum.photos/200/301",
];

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(loremPicsums);
  }, []);

  return (
    <Layout>
      <div className={styles.wrapper}>
        {images.map((img) => (
          <img
            src={img}
            alt={img}
            width={200}
            height={300}
            key={img}
            className={styles.img}
          />
        ))}
      </div>
    </Layout>
  );
}

export default Gallery;