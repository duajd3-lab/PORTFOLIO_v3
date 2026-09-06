import { motion } from 'framer-motion'; 
import { FiMail, FiGithub, FiArrowUpRight } from 'react-icons/fi'; 
import './Contact.scss';

export default function Contact() { 
    return <section id="contact" className="contact"><div className="contact-inner">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <small>04 / SAY HELLO</small>
            <h2>CONTACT</h2>
            <p>협업 제안이나 저와 나누고 싶은 이야기가 있으시다면<br />언제든지 편하게 연락해 주세요!</p>
            <div className="contact-links">
                <a href="mailto:duajd3@gmail.com">
                    <FiMail />
                    <span>duajd3@gmail.com</span>
                    <FiArrowUpRight />
                </a>
                <a href="https://github.com/duajd3-lab?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <FiGithub />
                    <span>Github</span>
                    <FiArrowUpRight />
                </a>
            </div>
        </motion.div>
    </div>
    <footer>
        <span>© 2026 Nayoung’s portfolio. All rights reserved.</span>
        <b>☺</b>
    </footer>
</section> }
