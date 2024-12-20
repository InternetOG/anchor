import React, { useState } from 'react'
import Header from './Header'
import HeroSection from "./HeroSection"
import { useLocation } from 'react-router-dom'
import heroimage from "../assets/home/heroimage.png"
import heroimg from "../assets/shop/heroimg.png"

const HeaderHero = () => {
  const currentPage = useLocation();

  let removePath = (currentPage) => {
    let page = currentPage.pathname.replace("/", "");
    return page === "" ? "home" : page;
  }

  const changebgImage = (removePath) => {
    switch(removePath) {

      case "home":
        return heroimage;
        
      case "shop":
        return heroimg;

      case "faq":
        return "#FBF9F2";

      default:
        return heroimg;
    }
  }

  const heroStyle = {
    backgroundImage: `url(${changebgImage(removePath(currentPage))})`,
    backgroundSize: "cover",
    backgroundPosition:  (removePath(currentPage) === "shop" || removePath(currentPage) === "about") ? "center 1px" : "center",
    backgroundRepeat: "no-repeat",
    paddingBottom: ((removePath(currentPage) === "faq") || (removePath(currentPage) == "shop")) && "15rem",
  }

  let bgStyle = () => {
    return removePath(currentPage) === "faq" 
      ? {backgroundColor: changebgImage(removePath(currentPage))} 
        : heroStyle
  }

  return (
    <>
      {console.log(removePath(currentPage))}
      <section className="pl-[6.3rem] custom-story:pl-[2.3rem]" style={bgStyle()}>
          <Header currentpage={currentPage.pathname}/>
          <HeroSection currentpage={currentPage.pathname}/>
      </section>
    </>
  )
}

export default HeaderHero