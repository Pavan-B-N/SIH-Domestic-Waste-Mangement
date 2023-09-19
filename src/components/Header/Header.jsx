import "./Header.css"
import logo from "../../images/logo.png"
import AppContext from "../../contexts/AppContext"
import { useContext, useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
function Header() {
    const { isLoggedIn, accountType } = useContext(AppContext)

    //office-menu
    const [officeAnchorEl, setOfficeAnchorEl] = useState(null)
    const isOfficeMenuOpen = Boolean(officeAnchorEl)

    const [mobileAnchorEl, setMobileAnchorEl] = useState(null)
    const isMobileMenuOpen = Boolean(mobileAnchorEl)

    function openOfficeMenu(e) {
        setOfficeAnchorEl(e.currentTarget)
    }
    function closeOfficeMenu() {
        setOfficeAnchorEl(null);
    }

    function openMobileMenu(e) {
        setMobileAnchorEl(e.currentTarget)
    }
    function closeMobileMenu() {
        setMobileAnchorEl(null);
    }
    return (
        <>
            <div className="header">
                <img src={logo} alt="DWM" className="logo" />
                <div className="nav">
                    <Link to="/">Home</Link>
                    {
                        accountType === "official" &&
                        (
                            // {/* Only office accessible, its Link menu consist of different installation methods */}
                            <button className="nav-item" onClick={openOfficeMenu}>Office</button>
                            // consist of view complaints,install dustbin,garbage truck connection,add BBMP office, appoint worker
                        )
                    }
                    {
                        accountType === "ordinary" &&
                        <Link to="/dashboard" className="nav-item" >Dahsboard</Link>
                    }
                    <Link to="/contact-us">Contact US</Link>
                    <Link to="/about">About US</Link>


                </div>
                <div className="right-menu-option">
                    {
                        isLoggedIn ?
                            // {/* Only for users who logged in */}
                            <Link to="/profile" className="login">Profile</Link>
                            :
                            // {/* only when user is not logged in */}
                            <Link to="/login" className="login">Login</Link>
                    }

                    <div className="mobile-nav">
                        <IconButton onClick={openMobileMenu}>
                            <MenuIcon sx={{ color: "white", margin: "5px" }} />
                        </IconButton>
                    </div>
                </div>

            </div>

            <div>
                <Menu
                    id="office-menu"
                    anchorEl={officeAnchorEl}
                    open={isOfficeMenuOpen}
                    onClose={closeOfficeMenu}
                >
                    <MenuItem><Link to="/install-dustbin">Install Dustbin</Link></MenuItem>
                    <MenuItem><Link to="/connect-grabage-truck">Connect Garbage truck</Link></MenuItem>
                    <MenuItem><Link to="/add-bbmp-office">Add BBMP Office</Link></MenuItem>
                    <MenuItem><Link to="/appoint-worker">Appoint Worker</Link></MenuItem>
                </Menu>
            </div>

            <div>
                <Menu
                    id="mobile-menu"
                    anchorEl={mobileAnchorEl}
                    open={isMobileMenuOpen}
                    onClose={closeMobileMenu}
                >
                    <MenuItem><Link to="/">Home</Link></MenuItem>
                    <MenuItem><Link to="/contact">Contact US</Link></MenuItem>
                    <MenuItem> <Link to="/about">About US</Link></MenuItem>
                    {
                        accountType === "official" &&
                        (
                            // {/* Only office accessible, its Link menu consist of different installation methods */}
                            <MenuItem><button className="nav-item" onClick={openOfficeMenu}>Office</button></MenuItem>
                            // consist of view complaints,install dustbin,garbage truck connection,add BBMP office, appoint worker
                        )
                    }
                </Menu>
            </div>
        </>
    )
}

export default Header
