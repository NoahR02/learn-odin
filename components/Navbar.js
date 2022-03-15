import Link from "next/link";
import styles from "../styles/Navbar.module.css"

import {useState} from "react";

const NavItem = (props) => {
  return <Link href={props.href}><a className={styles.nav_item}>{props.name}</a></Link>
}

export default function Navbar(props) {

  // Hamburger Image
  const hamburgerImage = (<svg viewBox="0 0 100 80" width="40" height="20">
    <rect y = "00" width = "100" height = "20"/>
    <rect y = "30" width = "100" height = "20"/>
    <rect y = "60" width = "100" height =" 20"/>
  </svg>);

  // Close Menu Image
  const CloseMenuImage = (<svg viewBox="0 0 100 80" width="40" height="20">
    <line x1 = "0" x2 = "100" y1 = "0"  y2 = "80" strokeWidth = "0.25em"/>
    <line x1 = "0" x2 = "100" y1 = "80" y2 = "0"  strokeWidth = "0.25em"/>
  </svg>);

  const [hamburger, setHamburgerText] = useState(hamburgerImage);
  const [showNav, setShowNav] = useState(false);

  const handleMenuClick = () => {

    setShowNav(!showNav)

    if(showNav) {
      setHamburgerText(hamburgerImage);
    } else {
      setHamburgerText(CloseMenuImage);
    }

  }

  const closeNav = () => {
    setShowNav(false);
    setHamburgerText(hamburgerImage);
  }

  return (
	  <header className={styles.header}>

      <h2 className={styles.title}>learnodin</h2>

      <span className={styles.hamburger} onClick={() => handleMenuClick()}>
        {hamburger}
      </span>

      <nav className={styles.nav + " " + (showNav ? styles.show_nav : "")}>

        <ul className={styles.links_container}>
          <li onClick={closeNav}><NavItem href="/" name="Home"/></li>
          <li onClick={closeNav}><NavItem href="/tutorials/1.0" name="Tutorials"/></li>
          <li onClick={closeNav}><NavItem href="/tutorials/0.0" name="Installation"/></li>
          <li onClick={closeNav}><NavItem href="/" name="Playground"/></li>
        </ul>

      </nav>

    </header>
	
	)
}