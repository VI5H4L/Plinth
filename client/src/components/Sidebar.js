import "boxicons";
import "./Sidebar.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      window.addEventListener("resize", listener);
      return () => window.removeEventListener("resize", listener);
    }, [matches, query]);

    return matches;
  };
  let menuItems = [
    {
      name: "Plinth 2k23",
      iconName: "menu",
      type: "solid",
    },
    {
      name: "Home",
      iconName: "home",
      type: "solid",
    },
    {
      name: "About Us",
      iconName: "info-circle",
      type: "solid",
    },
    {
      name: "Contact Us",
      iconName: "phone",
      type: "solid",
    },

    {
      name: "Login",
      iconName: "exit",
      type: "solid",
    },
    // {
    //   name: "Resources",
    //   iconName: "spreadsheet",
    //   type: "solid",
    // },
    // {
    //   name: "Starred",
    //   iconName: "star",
    //   type: "solid",
    // },
    // {
    //   name: "Settings",
    //   iconName: "cog",
    //   type: "solid",
    // },
    // {
    //   name: "Log Out",
    //   iconName: "log-out",
    //   color: "red",
    //   rotate: "180",
    // },
  ];
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(1);
  const [animate, setAnimate] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const changeSmall = useMediaQuery("(max-height: 550px)");
  let delay = 1;
  useEffect(() => {
    setAnimate(true);
    let timer = setTimeout(() => setAnimate(false), delay * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [active, delay]);

  return (
    <div className={`sidebar ${expanded && "expanded"}`}>
      {menuItems.map((item, index) => {
        let middle = false;
        if (!(index === 0 || index === menuItems.length - 1)) {
          middle = true;
        }
        return (
          <div
            className={`boxicon-container ${
              expanded && "expanded-boxicon-container"
            }`}
            onMouseEnter={() => {
              if (middle) {
                setHovered(index);
              }
            }}
            onMouseLeave={() => {
              if (middle) {
                setHovered(null);
              }
            }}
            onClick={() => {
              if (middle) {
                setActive(index);
              }
              if (index === 0) {
                setExpanded(!expanded);
              
              }
              if (index === 1) {
                navigate("/");
              }
              if (index === 2) {
                navigate("/about-us");
              }
              if (index === 3) {
                navigate("/contact");
              }
              if (index === 4) {
                navigate("/login");
              }
              
            }}
            key={index}
          >
            <box-icon
              class={`${middle && "boxicon"} 
                      ${!middle && "first-and-last-trash-fix"}
                      ${active === index && "active"}
                      `}
              className={item.class}
              size={changeSmall ? "sm" : "md"}
              name={item.iconName}
              type={item.type}
              color={
                hovered === index || active === index ? "white" : item.color
              }
              animation={active === index && animate ? "tada" : ""}
              rotate={item.rotate}
            ></box-icon>
            <p
              className={`description 
            ${expanded && "show-description"}
            ${active === index && "active-description"}`}
            >
              {item.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default Sidebar;
