const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="new">
                <div className="check"><a href="#" className="logo"><span>Portfo</span>lio</a></div>
                <ul className="menu">
                    <li><a href="#home" className="menu-btn">Home</a></li>
                    <li><a href="#about" className="menu-btn">About</a></li>
                    <li><a href="#interests" className="menu-btn">Interests</a></li>
                    <li><a href="#skills" className="menu-btn">Skills</a></li>
                    <li><a href="#project" className="menu-btn">Projects</a></li>
                    <li><a href="#contact" className="menu-btn">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
