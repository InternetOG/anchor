import React from 'react'
import data from '../herodb'
import HeroHome from './HeroHome';
import HeroShop from './HeroShop';
import HeroFaq from './HeroFaq';

const HeroSection = ({currentpage}) => {

  let removePath = (currentPage) => {
     let page = currentPage.replace("/", "");
     return page === "" ? "home" : page;
  }

  let renderContentBasedOnPage = (removePath) => {
    switch(removePath) {

      case "home":
        return (<HeroHome data={data}/>);

      case "shop":
        return (<HeroShop data={data}/>);
      
      case "faq":
        return (<HeroFaq data={data}/>);
      
      default:
        return (<HeroShop />);
    }
  }

  return (
    <>
      {renderContentBasedOnPage(removePath(currentpage))}
    </>
  )
}

export default HeroSection