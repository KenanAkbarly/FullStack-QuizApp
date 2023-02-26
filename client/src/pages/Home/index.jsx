import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import HomeHeader from '../../components/HomeHeader'
import styled from './style.module.scss'
import Carusel from '../../components/Carusel';
const Home = () => {
  return (
    <div >
      <div className={styled.header}>
      <HomeHeader/>
      <div className={styled.header_text}>
        <div>
        <h1>
          Quizlet'ilə Tanış Olun
        </h1>
        <p>Nəzəri biliklərinizi yoxlamaq və boşluqlarınzı aradan qaldırmaq üçün imtahan programı.</p>
        <button
        onClick={()=>{window.location.href = '/register'}}
        >Qeydiyyatdan Keç</button>
        </div>
      </div>
      </div>
    <section id='learning' >
      <div className={styled.learning_section}>
        <div className={styled.contanier}>
          <div className={styled.learning_section_left}>
            <h2>Öyrənmə sürətində imtahan və qiymətləndirmə.</h2>
            <p>Anında geri dönüş,öyrənmə prosesinin vacib hissəsidir.Quizlet,sizə sinif vəya ofis üçün tam da bunu verir.Tələbələr üçün diqqət çəkici qarşılıqlı təsir təqdim edərkən müəllimlərə zaman qazandıran,öyrənməyi izləmənin və dəyərləndirmənin yoludur.</p>
          </div>
         
          <div className={styled.learning_section_right}>
          
          <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_ayopewsc.json"  background="transparent"  speed="1"    loop  autoplay></lottie-player>
          </div>

        </div>
      </div>
    <div className={styled.carusel_body}>
      <Carusel/>
    </div>
    </section>
    </div>
  )
}
export default Home