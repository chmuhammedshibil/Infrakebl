"use client";
import Link from "next/link";
import { Fragment, useState } from "react";

const Menus = ({ single, menus }) => {
  const singleMenus = menus
    ? menus
    : [
        { id: 1, href: "about", title: "About" },
        { id: 2, href: "shows", title: "Shows" },
        { id: 3, href: "pricing", title: "Pricing" },
        { id: 4, href: "team", title: "Team" },
        { id: 5, href: "blog", title: "Blog" },
      ];
  return (
    <nav id="mobile-menu" className="d-none d-xl-block">
      {single ? (
        <ul >
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="has-dropdown active d-xl-none">
            <Link href="team" className="border-none">
              Home
            </Link>
          </li>
        </ul>
      ) : (
        <ul  >
          <li className="active menu-thumb">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="has-dropdown active d-xl-none">
            <Link href="team" className="border-none">
              Home
           </Link>
          </li>
          <li>
            <Link href="about">About</Link>
          </li>
          <li>
            <Link href="service-details">
              Services
            </Link>
          </li>

          {/* <li className="has-dropdown">
            <Link href="news">
              Pages
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li className="has-dropdown">
                <Link href="shows-details">
                  Shows
                  <i className="fas fa-angle-down" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link href="shows">Shows</Link>
                  </li>
                  <li>
                    <Link href="shows-details">Shows Details</Link>
                  </li>
                </ul>
              </li>
              <li className="has-dropdown">
                <Link href="team">
                  Team
                  <i className="fas fa-angle-down" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link href="team">Team</Link>
                  </li>
                  <li>
                    <Link href="team-details">Team Details</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="pricing">Pricing</Link>
              </li>
              <li>
                <Link href="faq">Faq's</Link>
              </li>
              <li>
                <Link href="404">404 Page</Link>
              </li>
            </ul>
          </li> */}


          <li>
            <Link href="shop">
              Shop
            </Link>
            {/* <ul className="submenu">
              <li>
                <Link href="shop">Shop Page</Link>
              </li>
              <li>
                <Link href="shop-cart">Shop Cart</Link>
              </li>
              <li>
                <Link href="shop-details">Shop Details</Link>
              </li>
              <li>
                <Link href="checkout">Checkout</Link>
              </li>
            </ul> */}
          </li>
          <li>
            <Link href="news">
              Blog
            </Link>
          </li>
          <li>
            <Link href="contact">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};
export default Menus;

export const MobileMenu = ({ menus, single }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  const singleMenus = menus
    ? menus
    : [
        { id: 1, href: "about", title: "About" },
        { id: 2, href: "shows", title: "Shows" },
        { id: 3, href: "pricing", title: "Pricing" },
        { id: 4, href: "team", title: "Team" },
        { id: 5, href: "blog", title: "Blog" },
      ];
  return (
    <nav className="mean-nav d-block d-xl-none">
      <ul  >
        <li className="has-dropdown active d-lg-none">
          <a
            href="/"
            className="border-none"
            onClick={() => activeMenuSet("home")}
          >
            Home
          </a>
          <a
            className="mean-expand"
            href="/"
            onClick={() => activeMenuSet("home")}
          >          </a>
        </li>
        {single ? (
          <Fragment>
            {singleMenus.map((menu) => (
              <li key={menu.id}>
                <a href={`#${menu.href}`} className="border-none">
                  {menu.title}
                </a>
              </li>
            ))}
          </Fragment>
        ) : (
          <Fragment>
            <li>
              <Link href="about">About</Link>
            </li>
            <li>
              <a href="service-details" onClick={() => activeMenuSet("Services")}>
                Services
              </a>
              <a
                className="mean-expand"
                href="#"
                onClick={() => activeMenuSet("Services")}
              >
              </a>
            </li>

            {/* <li className="has-dropdown">
              <a href="#" onClick={() => activeMenuSet("Pages")}>
                Pages
              </a>
              <ul className="submenu" style={activeLi("Pages")}>
                <li className="has-dropdown">
                  <a href="#" onClick={() => multiMenuSet("Shows")}>
                    Shows
                    <i className="fas fa-angle-down" />
                  </a>
                  <ul className="submenu" style={multiMenuActiveLi("Shows")}>
                    <li>
                      <Link href="show">Shows</Link>
                    </li>
                    <li>
                      <Link href="shows-details">Shows Details</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={() => multiMenuSet("Shows")}
                  >
                    <i className="far fa-plus" />
                  </a>
                </li>
                <li className="has-dropdown">
                  <a href="#" onClick={() => multiMenuSet("Team")}>
                    Team
                    <i className="fas fa-angle-down" />
                  </a>
                  <ul className="submenu" style={multiMenuActiveLi("Team")}>
                    <li>
                      <Link href="team">Team</Link>
                    </li>
                    <li>
                      <Link href="team-details">Team Details</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={() => multiMenuSet("Team")}
                  >
                    <i className="far fa-plus" />
                  </a>
                </li>
                <li>
                  <Link href="pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="faq">Faq's</Link>
                </li>
                <li>
                  <Link href="404">404 Page</Link>
                </li>
              </ul>
              <a
                className="mean-expand"
                href="#"
                onClick={() => activeMenuSet("Pages")}
              >
                <i className="far fa-plus" />
              </a>
            </li> */}

            <li>
              <a href="shop" onClick={() => activeMenuSet("Shop")}>
                Shop
                <i className="fas fa-angle-down" />
              </a>
              {/* <ul className="submenu" style={activeLi("Shop")}>
                <li>
                  <Link href="shop">Shop Page</Link>
                </li>
                <li>
                  <Link href="shop-details">Shop Details</Link>
                </li>
                <li>
                  <Link href="shop-cart">Shop Cart</Link>
                </li>
                <li>
                  <Link href="checkout">Checkout</Link>
                </li>
              </ul> */}
              <a
                className="mean-expand"
                href="#"
                onClick={() => activeMenuSet("Shop")}
              >
              </a>
            </li>
            <li>
              <a href="news" onClick={() => activeMenuSet("Blog")}>
                Blog
              </a>
              <a
                className="mean-expand"
                href="#"
                onClick={() => activeMenuSet("Blog")}
              >
              </a>
            </li>
            <li className="mean-last">
              <Link href="contact">Contact</Link>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
};
