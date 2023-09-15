import "./NavBox.css"
import {Link} from "react-router-dom"

function NavBoxItem({imgSrc,title,href}) {
  return (
    <Link className="nav-box-item" to={href} >
        <img src={imgSrc} alt="" />
        <div className="title">{title}</div>
    </Link>
  )
}

export default NavBoxItem
