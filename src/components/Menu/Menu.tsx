import { Link } from "react-router-dom"
import "../Menu/Menu.css"

export const Menu = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about" state={"testando about"}> About</Link></li>
          <li><Link to="/posts"> Posts</Link></li>
          <li><Link to="/posts/10"> Posts id</Link></li>
          <li><Link to="/redirect"> Redirect</Link></li>
        </ul>
      </nav>
    </div>
  )
}
