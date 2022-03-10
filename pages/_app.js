import "normalize.css"
import Navbar from "../components/Navbar"
import "../styles/global.css"
import "highlight.js/styles/hybrid.css"

const app = ({ Component, pageProps }) => {
	
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default app
