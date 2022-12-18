import React, { useEffect, useRef ,useState} from "react";
import { Countdown } from "../Timer/Countdown/Countdown.js";
import { Handles } from "../PlinthHandlesSection/Handles.js";
import styles from "./Home.module.css";
import "../../fonts/Absolute_Xero/Absolute_Xero.ttf";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { Power3 } from "gsap";
import { TimelineLite } from "gsap/gsap-core.js";

function Home() {
  const futureDate = new Date(2023, 0, 27);

  //Particle Bg
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  let item = useRef(null);
  let item1 = useRef(null);
  let item2 = useRef(null);
  let item3 = useRef(null);
  const [tl] = useState(new TimelineLite({paused: false}));

  useEffect(()=>{
    console.log(item);
    

    tl
    .to(item,0.5,{opacity:1,x:0,y:0,ease:Power3.easeOut})
    .to(item1,0.5,{opacity:1,ease:Power3.easeOut})
    .to(item2,1,{opacity:1,ease:Power3.easeOut})
    .to(item3,1,{opacity:1,ease:Power3.easeOut});
  
    // TweenMax.to(item,2,
    // {
    //   opacity:1,
    //   x:0,
    //   y:0,
    //   ease:Power3.easeOut
    // });

    // TweenMax.to(item1,2,
    //   {
    //     opacity:1,
    //     ease:Power3.easeOut
    //   });

  },[]);

  return (
    <>
      <div className={`${styles.homeContainer}`}>
        <div ref={el=>{item=el}} className={`${styles.homeGradientLayer}`}>
          <div className={`${styles.PlinthHeading}`}>
            <div className={`${styles.PlinthTitle}`}>PLINTH' </div>
            <div className={`${styles.PlinthYear}`}>23</div>
          </div>
          <div className={`${styles.SubHeading}`}>
            <div className={`${styles.HrLine}`} />
            <div>
              <p className={`${styles.PlinthTag}`}>TECHNO MANAGEMENT FEST</p>
            </div>
          </div>
        </div>
        <button ref={el=>{item2=el}} className={`${styles.RegisterButton}`}>REGISTER</button>
        <div ref={el=>{item1=el}} className={`${styles.homeGradientLayerRev}`}>
          <div className={`${styles.CountdownContainer}`}>
            <div className={`${styles.CountdownHeading}`}>STARTS IN </div>
          </div>
          <div className={`${styles.Countdown}`}>
            <Countdown futureDate={futureDate} />
          </div>
        </div>
        <div className={`${styles.Handles}`} ref={el=>{item3=el}}><Handles /></div>

        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            particles: {
                number: {
                  value: 180,
                  density: {
                    enable: true,
                    value_area: 3124.6995481203753
                  }
                },
                color: {
                  value: "#b69f9f"
                },
                shape: {
                  type: "triangle",
                  stroke: {
                    width: 5,
                    color: "#000000"
                  },
                  polygon: {
                    nb_sides: 4
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                  }
                },
                opacity: {
                  value: 0.4166266064160501,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 0.5,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 4.00602506169279,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 240.36150370156736,
                  color: "#effdff",
                  opacity: 0.2964458545652664,
                  width: 0.9614460148062693
                },
                move: {
                  enable: true,
                  speed: 3.409640098708463,
                  direction: "none",
                  random: true,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              },
              interactivity: {
                detect_on: "window",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  },
                  onclick: {
                    enable: true,
                    mode: "push"
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              },
              retina_detect: true,
            fullScreen: {
              enable: true,
              zIndex: -20,
            }
          }}
        />
      </div>
    </>
  );
}

export default Home;
