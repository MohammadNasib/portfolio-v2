import React, { useEffect } from 'react';
import data from '../assets/data.json';
import '../styles/projects.scss';
import { FaArrowRight } from 'react-icons/fa';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Projects() {
    const projects = data['projects'];
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
        <div className='project' id='projects'>
            <motion.h1
                ref={ref}
                animate={controls}
                initial='hidden'
                variants={variants}
                className='sectionTitle'
            >
                Projects
            </motion.h1>

            <motion.div
                ref={ref}
                animate={controls}
                initial='hidden'
                variants={variants}
                className='projectContainer'
            >
                {projects.map((project, id) => (
                    <a
                        className='projectBox'
                        style={{
                            backgroundImage: `url(${require(`../assets/imgs/${project.bg}`)})`,
                        }}
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        key={id}
                    >
                        <div className='projectInfo'>
                            <h2 className='fw-500'>{project.name}</h2>

                            <div className='button fw-400'>
                                Lets have a look <FaArrowRight className='fa' />
                            </div>
                        </div>
                    </a>
                ))}
            </motion.div>
        </div>
    );
}
