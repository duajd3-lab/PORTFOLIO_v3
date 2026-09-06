import {
  useEffect
} from 'react';

import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

import {
  Autoplay,
  Pagination,
  Navigation,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import type {
  Project
} from '../../types/project';

import './Popup.scss';


interface PopupProps {
  item: Project;
  onClose: () => void;
}


export default function Popup({
  item,
  onClose,
}: PopupProps) {

  /* =========================
     BODY SCROLL + ESC
  ========================= */

  useEffect(() => {

    const originalOverflow =
      document.body.style.overflow;


    document.body.style.overflow =
      'hidden';


    const handleKeyDown = (
      event: KeyboardEvent
    ) => {

      if (
        event.key === 'Escape'
      ) {
        onClose();
      }

    };


    window.addEventListener(
      'keydown',
      handleKeyDown
    );


    return () => {

      document.body.style.overflow =
        originalOverflow;


      window.removeEventListener(
        'keydown',
        handleKeyDown
      );

    };

  }, [onClose]);


  /* =========================
     OPEN LINK
  ========================= */

  const openLink = (
    url?: string
  ) => {

    if (!url) return;


    window.open(
      url.trim(),
      '_blank',
      'noopener,noreferrer'
    );

  };


  return (

    <div
      className="modal"

      role="dialog"

      aria-modal="true"

      aria-labelledby="popup-title"

      onClick={
        onClose
      }
    >

      <div
        className="container"

        onClick={(
          event
        ) =>
          event.stopPropagation()
        }
      >


        {/* CLOSE */}

        <button
          type="button"

          className="closeBtn"

          onClick={
            onClose
          }

          aria-label="프로젝트 상세 팝업 닫기"
        >
          ✕
        </button>


        {/* =========================
            HEADER
        ========================= */}

        <div className="popup-title">

          <span>
            PROJECT /{' '}
            {String(
              item.id
            ).padStart(
              2,
              '0'
            )}
          </span>


          <h2 id="popup-title">
            {item.title}
          </h2>


          <p>
            {item.subTitle}
          </p>

        </div>


        {/* =========================
            SWIPER
        ========================= */}

        {item.images.length >
          0 && (

          <Swiper
            spaceBetween={30}

            centeredSlides

            autoplay={{
              delay: 3500,
              disableOnInteraction:
                false,
            }}

            pagination={{
              clickable: true,
            }}

            navigation

            modules={[
              Autoplay,
              Pagination,
              Navigation,
            ]}

            className="mySwiper"
          >

            {item.images.map(
              (
                image,
                index
              ) => (

                <SwiperSlide
                  key={`${item.id}-image-${index}`}
                >

                  <img
                    src={image}

                    className="screen"

                    alt={`${item.title} 프로젝트 화면 ${index + 1}`}
                  />

                </SwiperSlide>

              )
            )}

          </Swiper>

        )}


        {/* =========================
            DETAILS
        ========================= */}

        <div className="details">


          {/* PERIOD */}

          <section className="sec-1">

            <div className="tt2">

              <div>
                <span>
                  개발 기간
                </span>
              </div>

              <div className="tt-text">

                <div>
                  {item.period}
                </div>

              </div>

            </div>

          </section>


          {/* SKILLS */}

          <section className="sec-1">

            <div className="tt">

              <span>
                SKILLS
              </span>

            </div>


            <div className="p-skills">

              {item.skills.map(
                (skill) => (

                  <div
                    key={skill}
                  >
                    {skill}
                  </div>

                )
              )}

            </div>

          </section>


          {/* LINK */}

          {(item.links.site ||
            item.links.github) && (

            <section className="sec-1">

              <div className="tt2">

                <div>
                  <span>
                    링크
                  </span>
                </div>


                <div className="linkBox">

                  {item.links.site && (

                    <button
                      type="button"

                      onClick={() =>
                        openLink(
                          item.links.site
                        )
                      }
                    >

                      SITE

                    </button>

                  )}


                  {item.links.github && (

                    <button
                      type="button"

                      onClick={() =>
                        openLink(
                          item.links.github
                        )
                      }
                    >

                      GITHUB

                    </button>

                  )}

                </div>

              </div>

            </section>

          )}


          {/* TEAM */}

          <section className="sec-1">

            <div className="tt2">

              <div>
                <span>
                  개발 인원
                </span>
              </div>


              <div className="tt-text">

                <div>
                  {item.team}
                </div>

              </div>

            </div>

          </section>


          {/* WORK */}

          {item.work.length >
            0 && (

            <section className="sec-2">

              <div className="tt2">
                <span>
                  역할
                </span>
              </div>


              <div className="tt-text">

                {item.work.map(
                  (
                    work,
                    index
                  ) => (

                    <div
                      key={`${item.id}-work-${index}`}
                    >
                      {work}
                    </div>

                  )
                )}

              </div>

            </section>

          )}


          {/* FEATURES */}

          {item.features.length >
            0 && (

            <section className="sec-1">

              <div className="tt3">

                <div>
                  <span>
                    상세 기능
                  </span>
                </div>


                <ul>

                  {item.features.map(
                    (
                      feature,
                      index
                    ) => (

                      <li
                        key={`${item.id}-feature-${index}`}
                      >
                        {feature}
                      </li>

                    )
                  )}

                </ul>

              </div>

            </section>

          )}


          {/* TROUBLESHOOTING */}

          {item
            .troubleshooting
            .length > 0 && (

            <section
              className="sec-1 troubleshooting"
            >

              <div className="tt">

                <span>
                  트러블 슈팅
                </span>


                <ul>

                  {item
                    .troubleshooting
                    .map(
                      (
                        trouble,
                        index
                      ) => (

                        <li
                          key={`${item.id}-trouble-${index}`}
                        >

                          <strong>
                            문제 상황
                          </strong>

                          <p>
                            {
                              trouble.problem
                            }
                          </p>


                          {trouble.cause && (
                            <>
                              <strong>
                                원인
                              </strong>

                              <p>
                                {
                                  trouble.cause
                                }
                              </p>
                            </>
                          )}


                          <strong>
                            해결 방법
                          </strong>

                          <p>
                            {
                              trouble.solution
                            }
                          </p>


                          <strong>
                            성과
                          </strong>

                          <p>
                            {
                              trouble.result
                            }
                          </p>

                        </li>

                      )
                    )}

                </ul>

              </div>

            </section>

          )}

        </div>

      </div>

    </div>

  );
}