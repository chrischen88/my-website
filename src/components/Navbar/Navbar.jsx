import './navbar.scss'
import { motion } from 'framer-motion'

export default function Navbar() {
    return (
        <div className="navbar">
            {/* <div className='logo'>
                <a href="#intro">C</a>
            </div> */}
            <div className='nav-links'>
                <div className='nav-pages'>
                    <motion.a href="#intro"
                        whileHover={{scale:1.1}}
                        whileTap={{ scale: 0.95 }}
                    >Home</motion.a>
                    <motion.a href="#portfolio"
                        whileHover={{scale:1.1}}
                        whileTap={{ scale: 0.95 }}
                    >Portfolio</motion.a>
                    <motion.a href="#about"
                        whileHover={{scale:1.1}}
                        whileTap={{ scale: 0.95 }}
                    >About</motion.a>
                    <motion.a href="#contact"
                        whileHover={{scale:1.1}}
                        whileTap={{ scale: 0.95 }}
                    >Contact</motion.a>
                </div>
                <div className='nav-icons'>
                    <a class="bi bi-linkedin" href="https://www.linkedin.com/in/chrischen2191/"></a>
                    <a className='bi bi-github' href="https://github.com/chrischen88"></a>
                </div>
            </div>
        </div>
    )
}
