import React, { useState, useEffect } from "react";
import { useStateValue } from "../useStateValue";

function Header() {
  const links = [
    {
      id: 1,
      to: "#banner",
      name: "Домой",
    },
    {
      id: 2,
      to: "#about",
      name: "О нас",
    },
    {
      id: 3,
      to: "#menu",
      name: "Меню",
    },
    {
      id: 7,
      to: "#",
      name: "Услуги",
    },
    {
      id: 4,
      to: "#expert",
      name: "Повара",
    },
    {
      id: 5,
      to: "#testimonials",
      name: "Отзывы",
    },
    {
      id: 6,
      to: "#contact",
      name: "Связаться",
    },
  ];
  const [fastToggle, setFastToggle] = useState(true);
  const [size, setSize] = useState(window.innerWidth);
  const changeSize = () => {
    setSize(window.innerWidth);
    if (window.innerWidth < 991) {
      setFastToggle(!fastToggle);
    } else {
      setFastToggle(fastToggle);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 991) {
      setFastToggle(!fastToggle);
    } else {
      setFastToggle(fastToggle);
    }
    window.addEventListener("resize", changeSize);
    window.addEventListener("scroll", () => {
      const header = document.querySelector("#header");
      header.classList.toggle("sticky", window.scrollY > 0);
    });
  }, []);

  return (
    <>
      <header id="header">
        <a href="#banner" className="logo">
          Кафе
          <small style={{ marginLeft: "0.5rem" }}>
            <span>"</span>Лесная Усадьба<span>"</span>
          </small>
        </a>
        {fastToggle ? <Navigation links={links} /> : <Modal links={links} />}
      </header>
    </>
  );
}

const Navigation = ({ links }) => {
  const [{ isServiceOpen }, dispatch] = useStateValue();
  return (
    <>
      <ul className="navigation">
        {links.map((item) => {
          const { id, name, to } = item;
          if (item.id === 7) {
            return (
              <li
                key={id}
                onClick={() => {
                  document.body.style.overflow = "hidden";
                  document.querySelector("#header").style.top = "-30%";
                  dispatch({
                    type: "OPEN_SERVICE",
                  });
                }}
              >
                <a className="link" style={{ cursor: "pointer" }}>
                  {name}
                </a>
              </li>
            );
          } else {
            return (
              <li key={id}>
                <a href={to}>{name}</a>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

const Modal = ({ links }) => {
  const [{ isServiceOpen }, dispatch] = useStateValue();
  const toggleMenu = () => {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
  };
  return (
    <>
      <div className="toggleMenu" onClick={toggleMenu} />
      <ul className="navigation">
        {links.map((item) => {
          const { id, name, to } = item;
          if (item.id === 7) {
            return (
              <li
                key={id}
                onClick={() => {
                  toggleMenu();
                  document.body.style.overflow = "hidden";
                  document.querySelector("#header").style.top = "-30%";
                  dispatch({
                    type: "OPEN_SERVICE",
                  });
                }}
              >
                <a className="link" style={{ cursor: "pointer" }}>
                  {name}
                </a>
              </li>
            );
          } else {
            return (
              <li key={id} onClick={toggleMenu}>
                <a href={to}>{name}</a>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

export default Header;
