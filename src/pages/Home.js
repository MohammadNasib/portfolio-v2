import React, { useEffect } from 'react';
import myPic from '../assets/imgs/mypic.png';
import '../styles/home.scss';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Home({ navigateTo }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const variants = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
        hidden: { opacity: 0, scale: 0.95 },
    };

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial='hidden'
            variants={variants}
            className='home'
            id='home'
        >
            <div className='img'>
                <img href='#home' src={myPic} alt="NASIB'S" width='100%' />
            </div>
            <div className='context'>
                <div className='texts'>
                    <h1 className='name fw-500'>MOHAMMAD NASIB</h1>
                    <h3 className='fw-500'>FRONT-END DEVELOPER</h3>
                    <p className='para fw-300'>
                        A self-taught developer who loves to build interactive and elegant websites.
                    </p>
                </div>

                <div className='buttons'>
                    <button
                        data-name='projects'
                        className='btn pointer'
                        onClick={() => navigateTo('#projects')}
                    >
                        My Projects
                    </button>

                    <button className='btn pointer' onClick={() => navigateTo('#about')}>
                        More About Me
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
