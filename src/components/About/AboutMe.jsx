import React from 'react'
import '../styles/AboutMe.scss';
import { Link } from 'react-router-dom';


function AboutMe() {
    return (
        <div className="aboutPage">

            <Link to="/" className="backBtn">
                <img src="/imgs/arrow.png" alt="back" />
            </Link>

            <div className="aboutTitle">
                <h1>
                    About <br />
                    <span className='meText'>
                        Me
                    </span>
                </h1>
            </div>

            <section className="aboutInner">
                <aside className="profileCard">
                    <div className="profileImg"></div>

                    <ul>
                        <li><img src="/svg/name.svg" alt="name" />김나영 | Kim Nayoung</li>
                        <li><img src="/svg/date.svg" alt="date" />2001.03.15</li>
                        <li><img src="/svg/mail.svg" alt="mail" />duajd3@gmail.com</li>
                        <li><img src="/svg/git-white.svg" alt="/git-white" />https://github.com/duajd3-lab</li>
                    </ul>
                </aside>

                <div className="introduce">
                    <div className="introName">
                        <span>웹 퍼블리셔</span>
                        <h2>김나영 입니다.</h2>
                    </div>

                    <h4>Introduce</h4>
                    <p>
                        안녕하세요. 사용자 경험과 디자인 완성도를 중요하게 생각하는 웹 퍼블리셔 김나영입니다. <br/>
                        HTML, CSS, JavaScript를 기반으로 React와 Vue 프로젝트를 경험하며 다양한 화면을
                        직접 구현해왔고, 단순한 퍼블리싱을 넘어 사용자가 편리하게 이용할 수 있는 UI와
                        인터랙션을 고민하며 작업하고 있습니다.
                    </p>
                    <p>
                        저는 좋은 결과물은 협업 속에서 만들어진다고 생각합니다. 팀 프로젝트를 진행하며
                        맡은 화면 구현뿐 아니라 팀원들과 적극적으로 의견을 공유하고, 새로운 기술과 디자인
                        방식도 직접 학습하며 프로젝트에 적용하려 노력했습니다.
                    </p>
                    <p>
                        앞으로도 사용자 경험과 최신 UI 트렌드를 꾸준히 학습하며, 디자인과 개발의 연결을
                        이해하는 웹 퍼블리셔로 성장하고 싶습니다.
                    </p>
                </div>

            </section>

            <section className="educationBox">
                <h3>Education</h3>

                <div className="eduList">
                    <p>
                        <span>2025.12 ~ 2026.06</span>
                        <strong>KDT 웹디자인/웹퍼블리셔 과정 수료</strong>
                    </p>

                    <p>
                        <span>2020.03 ~ 2023.02</span>
                        <strong>한양여자대학교 소프트웨어융합과 졸업</strong>
                    </p>
                </div>
            </section>
     

        </div>

    )
}

export default AboutMe