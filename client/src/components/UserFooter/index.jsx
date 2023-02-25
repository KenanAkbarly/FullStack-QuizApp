import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "./style.module.scss";
import { AiOutlineInstagram ,AiOutlineUser, AiOutlineMail} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';
const Footer = () => {
  const { mode } = useSelector((state) => state.darkMode);
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_av4v13g', 'template_tc6z19i', form.current, 'hyuIMQftk4iaBZx3B')
      .then((result) => {
          console.log(result.text);
          toast('Mesaj göndərildi', {
            duration: 4000,
            position: 'top-center',
          
            // Styling
            style: {},
            className: '',
          
            // Custom Icon
            icon: '📨',
          
            // Change colors of success/error/loading icon
            iconTheme: {
              primary: '#000',
              secondary: '#fff',
            },
          
            // Aria
            ariaProps: {
              role: 'status',
              'aria-live': 'polite',
            },
          });
        }, (error) => {
            console.log(error.text);
            toast('Mesaj göndərilmedi', {
                duration: 2000,
                position: 'top-center',
              
                // Styling
                style: {},
                className: '',
              
                // Custom Icon
                icon: '❌',
              
                // Change colors of success/error/loading icon
                iconTheme: {
                  primary: '#000',
                  secondary: '#fff',
                },
              
                // Aria
                ariaProps: {
                  role: 'status',
                  'aria-live': 'polite',
                },
              });
        });
    };
  return (
    <>
      <footer
        style={
          mode ? { backgroundColor: "#25303F" } : { backgroundColor: "#1a1a1a" }
        }
        className={styled.footer__home}
      >
        <div className={styled.footer__container}>
          <div className={styled.footer_content}>
            <div className={styled.footer_left_body}>
              <div className={styled.footer_left}>
                <img
                  src="https://www.shareicon.net/data/2015/08/19/87561_games_1042x1042.png"
                  alt=""
                />
                <h1 style={mode ? { color: "white" } : { color: "#264e93" }}>
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
                      title="Join us on Instagram"
                    >
                      <i>
                        <AiOutlineInstagram />
                      </i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kenan-akbarly-a815b222a/"
                      className={styled.in}
                      title="Join us on LinkedIn"
                    >
                      <i>
                        <FaLinkedinIn />
                      </i>
                    </a>
                    <a
                      href="https://github.com/KenanAkbarly"
                      className={styled.github}
                      title="Join us on GitHub"
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
              <p onClick={() => navigate("/quizz")}>Əsas Səhifə</p>
              <p onClick={() => navigate("/user/reports")}>Nəticə</p>
            </div>
            <div className={styled.footer_right}>
                <h1>Bizimlə əlaqə</h1>
              <form ref={form} onSubmit={sendEmail}>
                <div className={styled.inp_body}>
                    <AiOutlineUser/>
                <input placeholder="Istifadeci adi" type="text" name="user_name" />
                </div>
                <div className={styled.inp_body}>
                    <AiOutlineMail/>
                    <input type="email" 
                    placeholder="E-mail" name="user_email" />
                </div>
                <div className={styled.textArea_body}>
                <textarea placeholder="Mesaj yazın" name="message" />
                </div>
                <div className={styled.submit_btn}>
                <input type="submit" value="Göndər"/>
                </div>
              </form>
            </div>
          </div>
          <div
            style={
              mode
                ? { borderTop: " 1px solid #858584" }
                : { borderTop: " 1px solid #d4d4d437" }
            }
            className={styled.footer__bottom}
          >
            <p>Ⓒ Quizlet Quiz Portal</p>
          </div>
        </div>
        <Toaster />
      </footer>
    </>
  );
};

export default Footer;
