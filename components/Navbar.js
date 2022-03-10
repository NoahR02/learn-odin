import Link from "next/link";
import styles from "../styles/Navbar.module.css"

const NavItem = (props) => {
  return <Link href={props.href}><a className={styles.nav_item}>{props.name}</a></Link>
}

export default function Navbar(props) {
	return (
	  
	  <nav id={styles.nav} className={props.isAbs ? styles.nav_abs : styles.nav_rel}>
	    
	    <h2 id={styles.nav_title}>learnodin</h2>
      
      <ul>
        <li><NavItem href="/" name="Home"/></li>
        <li><NavItem href="/tutorials/1.0" name="Tutorials"/></li>
        <li><NavItem href="/tutorials/0.0" name="Installation"/></li>
        <li><NavItem href="/" name="Playground"/></li>
      </ul>
      
	  </nav>
	
	)
}