import { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import Layout from "../Layout/index";
import styles from "../styles/Esperimenti.module.scss";

export default function Esperimenti() {
  const [speed, setSpeed] = useState(5);
  const [opacity, setOpacity] = useState(0.5);
  const [size, setSize] = useState(5);
  const [shapes, setShapes] = useState("star");
  const [number, setNumber] = useState(180);
  const [colorPicker, setColorPicker] = useState("#FAEB15");
  const [colorBackground, setColorBackground] = useState("#3624AB");

  
  return (
    <Layout>
      <div className={styles.panel}>
        <div className={styles.wrapperTwo}>
        <h3 className={styles.h1}>Options</h3>
        <p className={styles.icon}>⚙️</p>
        </div>
        <div className={styles.wrapperTwo}>
        <label className={styles.speed}>Speed</label>
        <input className={styles.speed_bt}
          type="range"
          name=""
          id=""
          onChange={(e) => setSpeed(e.target.value / 10)}
        />
        </div>

        <div className={styles.wrapperTwo}>
        <label className={styles.opacity}>Opacity</label>
        <input className={styles.speed_bt}
          type="range"
          name=""
          id=""
          onChange={(e) => setOpacity(e.target.value / 100)}
        />
        </div>

        <div className={styles.wrapperTwo}>
        <label className={styles.size}>Size</label>
        <input className={styles.speed_bt}
          type="range"
          name=""
          id=""
          onChange={(e) => setSize(e.target.value / 5)}
        />
        </div>

        <div className={styles.wrapperTwo}>
        <label className={styles.number}>Number</label>
        <input className={styles.speed_bt}
          type="range"
          name=""
          id=""
          onChange={(e) => setNumber(e.target.value)}
        />
        </div>
       
        <div className={styles.wrapperTwo}>
        <label className={styles.color}>Color</label>
        <input className={styles.speed_bt}
          type="color"
          name=""
          id=""
          onChange={(e) => setColorPicker(e.target.value)}
        />
        </div>

        <div className={styles.wrapperTwo}>
        <label className={styles.bg}>Background</label>
        <input className={styles.speed_bt}
          type="color"
          name=""
          id=""
          onChange={(e) => setColorBackground(e.target.value)}
        />
        </div>
       
        <div className={styles.wrapperTwo}>
        <label className={styles.shapes}>Shape</label>
        <select className={styles.speed_bt}
          type="range"
          name=""
          id=""
          onChange={(e) => setShapes(e.target.value)}>
        <option value="square" selected>square</option>
        <option value="star" >star</option>
        <option value="circle" >circle</option>
        <option value="triangle" >triangle</option>
        </select>
        </div>
        
      </div>



      <div className={styles.wrapper}>
        <Particles
          options={{
            background: {
              color: {
                value: colorBackground,
              },
            },
            fpsLimit: 60,
            particles: {
              color: {
                value: colorPicker,
              },
              links: {
                color: "#00ff00",
                distance: 10,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: speed,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: number,
              },
              opacity: {
                value: opacity,
              },
              shape: {
                type: shapes,

              },
              size: {
                random: true,
                value: size,
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    </Layout>
  );
}