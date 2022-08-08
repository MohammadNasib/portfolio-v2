import React, { useEffect, useRef } from 'react';
import { FaEnvelope, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import '../styles/contact.scss';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
    const form = useRef();
    const modal = useRef();
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

    function openModal() {
        modal.current.showModal();
    }

    function closeModal() {
        modal.current.close();
    }

    function sendEmail(e) {
        e.preventDefault();

        setTimeout(() => {
            form.current.reset();
            openModal();
        }, 500);
    }

    return (
        <div className='contact' id='contact'>
            <motion.h1
                ref={ref}
                animate={controls}
                initial='hidden'
                variants={variants}
                className='sectionTitle'
            >
                Let's Talk
            </motion.h1>

            <motion.div
                ref={ref}
                animate={controls}
                initial='hidden'
                variants={variants}
                className='contactContainer'
            >
                <div className='contactInfo'>
                    <a href='mailto:mohammadnasib111@gmail.com' target='_self'>
                        <FaEnvelope />
                        <span>Email </span>
                    </a>

                    <a
                        href='https://www.linkedin.com/in/mohammad-naeemul-abrar-nasib-29313018b'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FaLinkedinIn />
                        <span>Linkedin</span>
                    </a>

                    <a
                        href='https://www.facebook.com/naeemul.abrar.nasib'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FaFacebookF />
                        <span>Facebook</span>
                    </a>
                </div>

                <h2>
                    <span>or</span>
                </h2>

                <div className='form'>
                    <form ref={form}>
                        <input type='text' data-name='name' placeholder='Your name' required />

                        <input type='text' data-email='email' placeholder='Your email' required />

                        <textarea
                            name='message'
                            data-message='message'
                            cols='30'
                            rows='10'
                            placeholder='Your message'
                            required
                        ></textarea>

                        <button className='btn pointer' type='button' onClick={sendEmail}>
                            Send
                            <i className='sendIcon fa-solid fa-paper-plane'></i>
                        </button>
                    </form>
                </div>

                <dialog className='modal' id='modal' ref={modal}>
                    <div className='modalContainer'>
                        <h3 className='fw-400'>
                            Sorry ! Server is not responding. Please use another way to contact.
                        </h3>

                        <button className='btn pointer' onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </dialog>
            </motion.div>
        </div>
    );
}
