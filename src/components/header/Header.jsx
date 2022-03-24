import React, { useEffect, useState } from "react";
import logo from "../../image/compar-light.svg";
import darkLogo from "../../image/compar-dark.svg";
import { Link, useLocation,NavLink } from "react-router-dom";
import "./header.scss";
const Header = () => {
  const [activeClass, setActiveClass] = useState("");
  
  const [navActiveClass,setNavActiveClass]=useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setActiveClass("active");
      } else {
        setActiveClass("");
      }
    });
  });
    function handleNavActive(){
        setNavActiveClass(!navActiveClass)
        console.log(setActiveClass(!navActiveClass));
    }

  return (
    <>
      <div className="resMenu">
        <span
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <i className="align justify icon"></i>
        </span>

        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">Compar Academy</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className="res-nav">
              <ul className="list-unstyled m-0">
                <li className="drop-nav active">
                  <NavLink exact className="active"  to={`/`} onClick={handleNavActive}>
                        Tedris Proqramlari
                      </NavLink> 
                  <Link to="/tedris-proqramlari"></Link>
                  <hr />

                  <ul className={`list-unstyled dropped-menu m-0 ${navActiveClass? "dropped-active" : "" }`}>
                    <li>
                      <Link to="/">Qrafik və Web-Dizayn</Link>
                    </li>
                    <li>
                      <Link to="/">Front-End</Link>
                    </li>

                    <li>
                      <Link to="/">Back-End(Pyton)</Link>
                    </li>
                    <li>
                      <Link to="/">Back-End(C#)</Link>
                    </li>
                    <li>
                      <Link to="/">Full-Stack</Link>
                    </li>
                  </ul>
                </li>
                <li className="drop-nav">
                <NavLink exact   to={`/akademiya`} onClick={handleNavActive}>
                     Akademiya
                      </NavLink> 
                  {/* <Link to="/haqqimizda">Akademiya</Link> */}
                  <hr />
                  <ul className={`list-unstyled dropped-menu m-0 ${navActiveClass? "dropped-active" : "" }`}>

                    <li className="drop-nav">
                      <Link to="/haqqimizda">Haqqımızda</Link>
                    </li>
                    <li className="drop-nav">
                      <Link to="/xeberler">Xəbərlər</Link>
                    </li>
                  </ul>
                </li>
                <li className="drop-nav">
                  <Link to="/karyera">Karyera</Link>
                  <hr />
                </li>
                <li className="drop-nav drop-contact">
                  <Link to="/elaqe">Əlaqə</Link>
                </li>
              </ul>
              <div className="header-bottom">
                <ul className="list-unstyled  m-0">
                  <li className="nav-phone">
                    <Link to="/">
                      <i aria-hidden="true" className="phone icon"></i>
                      (+994 50) 800 63 53
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className={`header ${activeClass}`}>
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-auto">
              <nav className="menu">
                <ul className="d-flex list-unstyled m-0">
                  <li className="drop-item">
                    <Link to="/tedris-proqramlari">Tədris Proqramları</Link>
                    <ul className={`dropped-menu ${navActiveClass}`}>
                      <li>
                        <Link to="/">Qrafik və Web-Dizayn</Link>
                      </li>
                      <li>
                        <Link to="/">Front-End</Link>
                      </li>

                      <li>
                        <Link to="/">Back-End(Pyton)</Link>
                      </li>
                      <li>
                        <Link to="/">Back-End(C#)</Link>
                      </li>
                      <li>
                        <Link to="/">Full-Stack</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="drop-item">
                    <Link to="/haqqimizda">Akademiya</Link>
                    <ul className="dropped-menu">
                      <li>
                        <Link to="/haqqimizda">Haqqımızda</Link>
                      </li>
                      <li>
                        <Link to="/xeberler">Xəbərlər</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/karyera">Karyera</Link>
                  </li>
                  <li>
                    <Link to="/elaqe">Əlaqə</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-auto comparLogo">
              <img
                width="120"
                className="img-fluid"
                src={activeClass === "active" ? darkLogo : logo}
                alt="Compar logo"
              />
            </div>
            <div className="col-auto">
              <div className="header-right">
                <ul className="d-flex list-unstyled align-items-center justify-content-end m-0">
                  <li className="nav-phone">
                    <Link to="/">
                      (+994 50) 800 63 53
                      <i aria-hidden="true" className="phone icon"></i>
                    </Link>
                  </li>
                  <li className="drop-item">
                    <i aria-hidden="true" className="search icon"></i>
                    <ul className="dropped-menu list-unstyled right drop-search">
                      <li>
                     
                        <div className="d-flex search-input align-items-center">
                          <input placeholder="Search" type="text" />
                          <i aria-hidden="true" className="search icon"></i>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <i aria-hidden="true" className="bars icon"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
