import Link from "next/link";
import styles from "../styles/Navbar.module.css"

import {useState} from "react";

const NavItem = (props) => {
  return <Link href={props.href}><a className={styles.nav_item}>{props.name}</a></Link>
}

export default function Navbar(props) {

  const [hamburgerText, setHamburerText] = useState("\u2630");
  const [showNav, setShowNav] = useState(false);

	return (
	  
	  <nav id={styles.nav} className={props.isAbs ? styles.nav_abs : styles.nav_rel}>
	    
	    <h2 id={styles.nav_title}>learnodin</h2>

      <span id="hamburger" onClick={ () => {
        if(hamburgerText === "\u2630") {
          setHamburerText("x");
          setShowNav(true);
        } else {
          setHamburerText("\u2630");
          setShowNav(false);
        }
      }}>
        {hamburgerText}
      </span>

      <ul className={showNav ? styles.show : styles.no_show}>
        <li><NavItem href="/" name="Home"/></li>
        <li><NavItem href="/tutorials/1.0" name="Tutorials"/></li>
        <li><NavItem href="/tutorials/0.0" name="Installation"/></li>
        <li><NavItem href="/" name="Playground"/></li>
      </ul>
      
	  </nav>
	
	)
}