import './navbar.scss'

export default function Navbar() {
    return (
        <div className="navbar">
            {/* <div className='logo'>
                <a href="#intro">C</a>
            </div> */}
            <div className='nav-links'>
                <div className='nav-pages'>
                    <a href="#intro">Home</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className='nav-icons'>
                    <a class="bi bi-linkedin" href="https://www.linkedin.com/in/chrischen2191/"></a>
                    <a className='bi bi-github' href="https://github.com/chrischen88"></a>
                </div>
            </div>
        </div>
    )
}
