import './intro.scss'
import { motion } from 'framer-motion'
import * as waves from './Waves'


export default function Intro() {
    return (
        <div className='intro' id='intro'>
            <div className='wrapper'>
                <div className='greeting'>
                    <motion.h2
                        animate={{y:["200%", "0%"]}}
                    >Hello, my name is</motion.h2>
                </div>
                <div className='name'>
                    <motion.h1
                        animate={{y:["200%", "0%"]}}
                        transition={{delay:.5, duration:1, type: 'tween'}}
                    >Christopher</motion.h1>
                </div>
                <div className='name'>
                <motion.h1
                        animate={{y:["200%", "0%"]}}
                        transition={{delay:.75, duration: 1, type: 'tween'}}
                    >Chen</motion.h1>
                </div>
                {/* <div className='followup'>
                    <h3>and I am a </h3>
                </div> */}
            </div>
            <div className='background'>
                <motion.svg id="visual" viewBox="0 0 960 540" preserveAspectRatio="none" width="100vw" height="101vh"
                    initial="start"
                    animate="end"
                >
                    <motion.path
                        variants={waves.variant1}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        fill="#e26d5c"
                    />
                    <motion.path
                        variants={waves.variant2}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "mirror"
                          }}
                          fill="#c86158"
                    />
                    <motion.path
                        variants={waves.variant3}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        fill="#ad5652"
                    />
                </motion.svg>
            </div>
        </div>
    )
}
