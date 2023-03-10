import React, { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import styled from "./style.module.scss";
import userHome from "../../.././src/asset/tablet/userHome.jpg";
import userNetice from "../../.././src/asset/tablet/userNetice.jpg";
import examResult from "../../.././src/asset/tablet/examResult.jpg";
const Carusel = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className={styled.carusel_body}>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "#9dc3da",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 40,
            lineHeight: 1,
            textAlign: "center",
            width: 40,
            top:"58%",
            position:'absolute',
            right:0,
            zIndex:10,
            marginRight:"10px"
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "#9dc3da",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 40,
            lineHeight: 1,
            textAlign: "center",
            width: 40,
            position:'absolute',
            top:"58%",
            left:0,
            zIndex:10,
            marginLeft:"10px"
           
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={600}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div className={styled.carusel_item}>
          <div className={styled.carusel_contanier}>
            <div className={styled.carusel_text}>
              <h2>??mtahanlar</h2>
              <p>
                Siz hesab??n??za giri?? edib, imtahanlarda i??tirak ed??r??k n??z??ri
                bilikl??rinizi daha da m??hk??ml??ndir??, v?? yeni bilikl??r eld?? ed??
                bil??risiniz.
              </p>
            </div>
            <div className={styled.image_body}>
              <img src={userHome} alt="" />
            </div>
          </div>
        </div>
        <div className={styled.carusel_item}>
          <div className={styled.carusel_contanier}>
            <div className={styled.carusel_text}>
              <h2>N??tic??l??r</h2>
              <p>
                Siz n??tic??l??r b??lm??sind?? n??tic?? ke??mi??iniz?? baxa
                bil??riniz.Burada i??tirak etdiyiniz imtahanlar??n n??tic??l??ri b??t??n
                ayr??nt??lar?? il?? ??z ??ksini tap??r.
              </p>
            </div>
            <div className={styled.image_body}>
              <img src={userNetice} alt="" />
            </div>
          </div>
        </div>
        <div className={styled.carusel_item}>
          <div className={styled.carusel_contanier}>
            <div className={styled.carusel_text}>
              <h2>??mtahan ayr??nt??s??</h2>
              <p>
                Bu b??lm??d?? i??tirak etdiyiniz imtahanda cavablad??q??nz suallar ??z
                ??ksini tap??r.Bunun say??sind?? siz d??zg??n v?? s??hv cavablad??qn??z
                suallar?? g??r?? bil??rsiniz.
              </p>
            </div>
            <div className={styled.image_body}>
              <img src={examResult} alt="" />
            </div>
          </div>
        </div>
      </ReactSimplyCarousel>
    </div>
  );
};

export default Carusel;
