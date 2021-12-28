import './intro.scss'
import { motion } from 'framer-motion'
import * as waves from './Waves'

export default function Intro() {
    return (
        <div className='intro' id='intro'>
            <div className='wrapper'>
                <div className='greeting'>
                    <h2>Hello, my name is</h2>
                </div>
                <div className='name'>
                    <h1>Christopher<br />Chen</h1>
                </div>
            </div>
            <div className='background'>
                <motion.svg id="visual" viewBox="0 0 960 540" preserveAspectRatio="none" width="100vw" height="101vh"
                    initial="start"
                    animate="end"
                >
                    {/* <path d="M0 307L80 217L160 264L240 275L320 357L400 346L480 290L560 221L640 275L720 348L800 260L880 334L960 331L960 541L880 541L800 541L720 541L640 541L560 541L480 541L400 541L320 541L240 541L160 541L80 541L0 541Z" fill="#e26d5c"></path>
                    <path d="M0 338L80 260L160 313L240 295L320 296L400 303L480 268L560 241L640 292L720 337L800 269L880 286L960 330L960 541L880 541L800 541L720 541L640 541L560 541L480 541L400 541L320 541L240 541L160 541L80 541L0 541Z" fill="#c86158"></path>
                    <path d="M0 326L80 393L160 286L240 346L320 303L400 376L480 284L560 364L640 356L720 384L800 337L880 368L960 322L960 541L880 541L800 541L720 541L640 541L560 541L480 541L400 541L320 541L240 541L160 541L80 541L0 541Z" fill="#ad5652"></path>
                    <path d="M0 413L80 387L160 370L240 394L320 433L400 326L480 387L560 394L640 424L720 351L800 333L880 339L960 399L960 541L880 541L800 541L720 541L640 541L560 541L480 541L400 541L320 541L240 541L160 541L80 541L0 541Z" fill="#934b4b"></path>
                    <path d="M0 428L80 380L160 441L240 372L320 440L400 406L480 376L560 408L640 378L720 376L800 430L880 387L960 430L960 541L880 541L800 541L720 541L640 541L560 541L480 541L400 541L320 541L240 541L160 541L80 541L0 541Z" fill="#794143"></path>
                    <path d="M0 455L80 450L160 426L240 484L320 431L400 437L480 438L560 447L640 427L720 470L800 452L880 436L960 433L960 541L880 541L800 541L720 541L640 541L560 541L480 541L400 541L320 541L240 541L160 541L80 541L0 541Z" fill="#60373a"></path>
                    <path d="M0 498L80 499L160 482L240 480L320 508L400 508L480 489L560 488L640 497L720 495L800 477L880 512L960 463L960 541L880 541L800 541L720 541L640 541L560 541L480 541L400 541L320 541L240 541L160 541L80 541L0 541Z" fill="#472d30"></path>
                    <rect x="0" y="97%" width="100%" height="60%" fill="#472d30"></rect> */}
                    <motion.path
                        variants={waves.variant1}
                        transition={{
                            duration: 3,
                            yoyo: Infinity,
                            repeat: Infinity
                          }}
                        fill="#e26d5c"
                    />
                    <motion.path
                        variants={waves.variant2}
                        transition={{
                            duration: 3,
                            yoyo: Infinity,
                            repeat: Infinity
                          }}
                          fill="#c86158"
                    />
                    <motion.path
                        variants={waves.variant3}
                        transition={{
                            duration: 3,
                            yoyo: Infinity,
                            repeat: Infinity
                          }}
                        fill="#ad5652"
                    />
                </motion.svg>

            </div>
        </div>
    )
}
