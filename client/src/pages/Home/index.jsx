import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import HomeHeader from '../../components/HomeHeader'
import styled from './style.module.scss'
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
    <div>
    <Carousel>
                <div className={styled.carusel_div}>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate explicabo esse odit quod, aspernatur, possimus provident dolor quisquam magnam maiores est unde atque, nemo perferendis voluptatem labore accusantium necessitatibus consectetur exercitationem vel alias harum nisi. Earum suscipit illum cumque eligendi numquam quibusdam id fugit! Pariatur natus ex voluptatum facere esse impedit consequatur praesentium, soluta porro recusandae tenetur mollitia, reiciendis minima ipsam officiis explicabo suscipit illum dolorem voluptate eaque consectetur? Corrupti maiores dolorem assumenda vitae sunt voluptatum nulla, earum harum, explicabo esse fuga! Ducimus esse, iste harum minima nam aperiam amet itaque delectus in omnis, deserunt praesentium ipsam sequi debitis repellat.
                   </div>
                    <div className={styled.image_body}>
                    <img src="https://cdn.theatlantic.com/media/img/photo/2018/10/images-of-the-season-fall-is-in-the/f02_RTX6EJJJ-1/original.jpg" />
                    </div>
                
                </div>
                <div>
                    <img src="https://cdn.theatlantic.com/media/img/photo/2018/10/images-of-the-season-fall-is-in-the/f02_RTX6EJJJ-1/original.jpg" />
                    
                </div>
                <div>
                    <img src="https://cdn.theatlantic.com/media/img/photo/2018/10/images-of-the-season-fall-is-in-the/f02_RTX6EJJJ-1/original.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
    </section>
    </div>
  )
}
export default Home