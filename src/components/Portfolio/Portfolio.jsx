import './portfolio.scss'
import { motion } from 'framer-motion'
import { useState } from 'react'
import * as projects from './Projects'

export default function Portfolio() {
    const [idx, setIdx] = useState(0);

    return (
        <div className='portfolio' id='portfolio'>
            <motion.button className='bi bi-caret-left-fill unstyled' onClick={() => {idx - 1 < 0 ? setIdx(2) : setIdx(idx - 1)}}
                whileHover={{scale:1.3}}
                whileTap={{ scale: 0.95 }}
            ></motion.button>
            <div className='projects'>
                <h1 className='header'>{projects.headers[idx]}</h1>
                <h2 className='body'>{projects.bodies[idx]}</h2>
            </div>
            <motion.button className='bi bi-caret-right-fill unstyled' onClick={() => {idx + 1 > 2 ? setIdx(0) : setIdx(idx + 1)}}
                whileHover={{scale:1.3}}
                whileTap={{ scale: 0.95 }}
            ></motion.button>
        </div>
    )
}
