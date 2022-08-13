import React, { useEffect } from 'react';
import '../styles/about.scss';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FaArrowRight,
    FaBootstrap,
    FaCss3,
    FaHtml5,
    FaJs,
    FaPython,
    FaReact,
    FaSass,
} from 'react-icons/fa';

export default function About() {
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
        <div className='about' id='about'>
            <motion.h1
                ref={ref}
                animate={controls}
                initial='hidden'
                variants={variants}
                className='sectionTitle'
            >
                About
            </motion.h1>

            <motion.div
                ref={ref}
                animate={controls}
                initial='hidden'
                variants={variants}
                className='aboutContainer'
            >
                <div className='info'>
                    <h3 className='fw-500'>Hi There , This is</h3>

                    <h1 className='name fw-500'>Mohammad Naeemul Abrar Nasib</h1>

                    <p className='para fw-300'>
                        I like to call my self a Front-end-developer. I mostly work in React JS.
                        Starting in 2021, I have learnt basic and advance topics of web-development
                        and completed a couple of projects. Now I am looking for an opportunity to
                        make myself experienced in real world projects. And here is my{' '}
                        <a
                            href='https://drive.google.com/file/d/1ITmPHlDYMUWOmGrLnG4VPw9cBg8EvlZ6/view?usp=sharing'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            resume
                        </a>{' '}
                        .
                    </p>

                    <a href='#skills' className='skillBtn'>
                        I'm skilled in ..
                        <FaArrowRight className='fa' />
                    </a>
                </div>

                <div className='skills' id='skills'>
                    <span className='fw-500'>
                        <FaHtml5 /> HTML
                    </span>

                    <span className='fw-500'>
                        <FaCss3 /> CSS
                    </span>

                    <span className='fw-500'>
                        <FaBootstrap /> Bootstap
                    </span>

                    <span className='fw-500'>
                        <FaSass /> SASS
                    </span>

                    <span className='fw-500'>
                        <FaJs /> JAVASCRIPT
                    </span>

                    <span className='fw-500'>
                        <FaReact /> REACT
                    </span>

                    <span className='fw-500'>
                        <FaPython /> PYTHON
                    </span>
                </div>
            </motion.div>
        </div>
    );
}
