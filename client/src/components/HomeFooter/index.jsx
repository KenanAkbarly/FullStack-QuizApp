import React from 'react'
import styled from './style.module.scss'
import {
    AiOutlineInstagram,
    AiOutlineUser,
    AiOutlineMail,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
  import { BsGithub } from "react-icons/bs";
  import emailjs from "@emailjs/browser";
  import toast, { Toaster } from "react-hot-toast";
  import ScrollToTop from "react-scroll-to-top";
const HomeFooter = () => {
  return (
    <>
      <footer
        
        className={styled.footer__home}
      >
        <ScrollToTop smooth top="60" />
        <div className={styled.footer__container}>
          <div className={styled.footer_content}>
            <div className={styled.footer_left_body}>
              <div className={styled.footer_left}>
                <img
                  src="https://www.shareicon.net/data/2015/08/19/87561_games_1042x1042.png"
                  alt=""
                />
                <h1>
                  Quizlet
                </h1>
              </div>
              <div className={styled.social_media}>
                <p>Bizi izlə</p>
                <div className={styled.effect}>
                  <div className={styled.buttons}>
                    <a
                      href="https://www.instagram.com/kenanakbarly/?hl=ru"
                      className={styled.insta}
                      title="İnstagram-da bizə qoşulun"
                    >
                      <i>
                        <AiOutlineInstagram />
                      </i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kenan-akbarly-a815b222a/"
                      className={styled.in}
                      title="Linkedİn-də bizə qoşulun"
                    >
                      <i>
                        <FaLinkedinIn />
                      </i>
                    </a>
                    <a
                      href="https://github.com/KenanAkbarly"
                      className={styled.github}
                      title="Github-da bizə qoşulun"
                    >
                      <i>
                        <BsGithub />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styled.footer_middle}>
              <h1>Səhifələr</h1>
              <p>Əsas Səhifə</p>
              <p>Nəticə</p>
            </div>
            <div className={styled.footer_right}>
              <h1>Bizimlə əlaqə</h1>

            </div>
          </div>
          <div
         
            className={styled.footer__bottom}
          >
            <p>Ⓒ Quizlet Quizz Portalı</p>
          </div>
        </div>
        <Toaster />
      </footer>
    </>
  )
}

export default HomeFooter