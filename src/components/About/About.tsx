import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import './About.scss';

const values = [['✦', '사용자 흐름을 고려한 UI/UX를 설계합니다'], ['⌁', '유지보수성을 고려한 코드를 작성합니다'], ['↗', '꾸준한 학습과 개선을 통해 성장합니다']];
export default function About() {
    return <section id="about" className="about">
        <div className="about-inner">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <small>01 / WHO I AM</small>
                <h2>ABOUT ME</h2>
            </motion.div>
            <div className="about-grid"><motion.div className="bio" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                {/* <div><img src="/images/profile.jpg" alt="Profile" width={180} /></div> */}
                <span>안녕하세요.</span>
                <p>사용자 중심의 인터페이스를 고민하고,<br />더 나은 사용자 경험을 제공하기 위해<br />서비스를 개선해 나가는 웹 퍼블리셔</p>
                <strong>김나영입니다.</strong>
                {/* <a href="/About/AboutMe.jsx">자기소개서 더보기 <FiArrowUpRight /></a> */}
                </motion.div>
                {/* <motion.div className="values" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: .15 } } }}>
                    {values.map(([icon, text]) => <motion.div key={text} variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0 } }}><i>{icon}</i>{text}</motion.div>)}
                </motion.div> */}
                <div className="values">
                    
                    <strong>EDUCATION</strong>
                    <p>2020.03 - 2023.02 한양여자대학교 소프트웨어융합과 졸업</p>
                <p>
                    2025.12 - 2026.06 생성형AI 기반 UI/UX 디자인 & 프론트엔드 개발 과정 수료 - KD아카데미
                </p>
                </div>
            </div></div>
    </section>
}
