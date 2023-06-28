import { featuredData, responsive} from "./carouselData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselProduct from "./CarouselProduct";
import { useContext } from "react";
import { DataContext } from "../Context";
import { Link } from "react-router-dom";
import React, {useEffect} from "react";


export default function Carousels() {
 
  const { onAdd1,  addFav, favoritePr, makeup, skincare, 
    kidClothes, menclothes, womenClothes, rings, chains,
    removeFav, favDelete, handleChange, isChecked, handleClick,
    checkedArray, handleChangeCart, handleClickCart, cartArray} = useContext(DataContext);
    


  const kid = kidClothes.map((item)=>(
   
    <CarouselProduct onAdd1={onAdd1} isChecked={isChecked} caProduct={item} addFav={addFav} favoritePr={favoritePr} favProduct={item}
    removeFav={removeFav} key={item._id} favDelete={favDelete} handleChange={handleChange}   checkedArray={checkedArray}
    handleClick={handleClick}  handleChangeCart={handleChangeCart} handleClickCart={handleClickCart} cartArray={cartArray}/>

  ));

  const men =menclothes.map((item)=>(

    <CarouselProduct onAdd1={onAdd1} isChecked={isChecked} caProduct={item} addFav={addFav} favoritePr={favoritePr} favProduct={item}
    removeFav={removeFav} key={item._id} favDelete={favDelete} handleChange={handleChange}   checkedArray={checkedArray}
    handleClick={handleClick}  handleChangeCart={handleChangeCart} handleClickCart={handleClickCart} cartArray={cartArray}/>
 
  ))

  const women = womenClothes.map((item)=>(
 
    <CarouselProduct onAdd1={onAdd1} isChecked={isChecked} caProduct={item} addFav={addFav} favoritePr={favoritePr} favProduct={item}
    removeFav={removeFav} key={item._id} favDelete={favDelete} handleChange={handleChange}   checkedArray={checkedArray}
    handleClick={handleClick}  handleChangeCart={handleChangeCart} handleClickCart={handleClickCart} cartArray={cartArray}/>

  ));

  const skincares = skincare.map((item)=>(
    <>
  
    <CarouselProduct onAdd1={onAdd1} isChecked={isChecked} caProduct={item} addFav={addFav} favoritePr={favoritePr} favProduct={item}
    removeFav={removeFav} key={item._id} favDelete={favDelete} handleChange={handleChange}   checkedArray={checkedArray}
    handleClick={handleClick}  handleChangeCart={handleChangeCart} handleClickCart={handleClickCart} cartArray={cartArray}/>

    </>
  ));

const makeups = makeup.map((item)=>(

    <CarouselProduct onAdd1={onAdd1} isChecked={isChecked} caProduct={item} addFav={addFav} favoritePr={favoritePr} favProduct={item}
    removeFav={removeFav} key={item._id} favDelete={favDelete} handleChange={handleChange}   checkedArray={checkedArray}
    handleClick={handleClick}  handleChangeCart={handleChangeCart} handleClickCart={handleClickCart} cartArray={cartArray}/>

  ));

  const earringsPr = chains.map((item)=>(

    <CarouselProduct onAdd1={onAdd1} isChecked={isChecked} caProduct={item} addFav={addFav} favoritePr={favoritePr} favProduct={item}
    removeFav={removeFav} key={item._id} favDelete={favDelete} handleChange={handleChange}   checkedArray={checkedArray}
    handleClick={handleClick}  handleChangeCart={handleChangeCart} handleClickCart={handleClickCart} cartArray={cartArray}/>
  
  ));

  const ringsPr = rings.map((item)=>(
   
    <CarouselProduct onAdd1={onAdd1} isChecked={isChecked} caProduct={item} addFav={addFav} favoritePr={favoritePr} favProduct={item}
    removeFav={removeFav} key={item._id} favDelete={favDelete} handleChange={handleChange}   checkedArray={checkedArray}
    handleClick={handleClick}  handleChangeCart={handleChangeCart} handleClickCart={handleClickCart} cartArray={cartArray}/>
 
  ))

  const newProducts = [
    ...makeup.slice(0, 2),
    ...skincare.slice(0, 2),
    ...kidClothes.slice(0, 2),
    ...menclothes.slice(0, 2),
    ...womenClothes.slice(0, 2),
    ...rings.slice(0, 2),
    ...chains.slice(0, 2),
  ];
const urls = {
  makeup: '/makeups',
  skincare: '/skincares',
  kidClothes: '/kidsclothes',
  menclothes: '/MenCloth',
  womenClothes: '/WomenCloth',
  rings: '/Ring',
  chains: '/Earrings'

}
  const newProduct =newProducts.map((item) => {
const url = urls[item.category]
const detailsUrl = `${url}/${item._id}`
return(

    <CarouselProduct isChecked={isChecked} caProduct={item} onAdd1={onAdd1} addFav={addFav} favoritePr={favoritePr} favProduct={item}
    removeFav={removeFav} key={item._id} favDelete={favDelete} handleChange={handleChange}
    handleClick={handleClick}  checkedArray={checkedArray} handleChangeCart={handleChangeCart} handleClickCart={handleClickCart} cartArray={cartArray}/>


  )});

  return (
    <div >
      <div className='col-sm-12 col-md-12 col-lg-12'>
        <h4 style={{backgroundColor:'#f2e2a3', color: '#454545', marginTop:'0', paddingLeft:'40px'}}>Ангилал</h4>
        <div className='row'>
      
        <div className='col-4'>
          <Link to='/Beauty'>
        <img className='class' src={require('../pages/imgs/women.png')} style={{width:'110px', height:'100px'}}/>
        </Link>
        </div>
        <div className='col-4'>
          <Link to='/Jewelry'>
        <img className='class' src={require('../pages/imgs/rings.png')} style={{width:'110px', height:'90px'}}/>
        </Link>
        </div>
        <div className='col-4'>
          <Link to='/Clothes'>
        <img className='class' src={require('../pages/imgs/cloth.png')} style={{width:'125px', height:'90px'}}/>
        </Link>
        </div>
        </div> 
        <div className='row'>
        <div className='col-4'>Гоо сайхан</div>
        <div className='col-4'>Үнэт эдлэл</div>
        <div className='col-4'>Хувцас</div>
        </div>
      </div>
  
    
      <div className='col-sm-12 col-md-12 col-lg-12'
        style={{ backgroundColor: '#f2e2a3', color: '#454545',marginTop:'30px', height:'35px', paddingTop:'6px', paddingLeft:'36px' }}>
        Шинээр ирсэн</div>
      <Carousel keyBoardControl={true} responsive={responsive} autoPlaySpeed={500} autoPlay={true}
      >
   
        {newProduct}
      </Carousel>

      <div className='col-sm-12 col-md-12 col-lg-12'
        style={{ backgroundColor: '#f2e2a3', color: '#454545',marginTop:'30px', height:'35px', paddingTop:'6px', paddingLeft:'36px' }}>
     Хүүхдийн хувцас</div>
      <Carousel keyBoardControl={true} responsive={responsive} 
      >
   
        {kid}
      </Carousel>


      <div className='col-sm-12 col-md-12 col-lg-12'
        style={{ backgroundColor: '#f2e2a3', color: '#454545',marginTop:'30px', height:'35px', paddingTop:'6px', paddingLeft:'36px' }}>
     Эрэгтэй хувцас</div>
      <Carousel keyBoardControl={true} responsive={responsive} 
      >
   
        {men}
      </Carousel>


      <div className='col-sm-12 col-md-12 col-lg-12'
        style={{ backgroundColor: '#f2e2a3', color: '#454545',marginTop:'30px', height:'35px', paddingTop:'6px', paddingLeft:'36px' }}>
   эмэгтэй хувцас</div>
      <Carousel keyBoardControl={true} responsive={responsive} 
      >
   
        {women}
      </Carousel>

      <div className='col-sm-12 col-md-12 col-lg-12'
        style={{ backgroundColor: '#f2e2a3', color: '#454545',marginTop:'30px', height:'35px', paddingTop:'6px', paddingLeft:'36px' }}>
  Арьс арчилгаа</div>
      <Carousel keyBoardControl={true} responsive={responsive} 
      >
   
        {skincares}
      </Carousel>

      <div className='col-sm-12 col-md-12 col-lg-12'
        style={{ backgroundColor: '#f2e2a3', color: '#454545',marginTop:'30px', height:'35px', paddingTop:'6px', paddingLeft:'36px' }}>
  Нүүр будалт </div>
      <Carousel keyBoardControl={true} responsive={responsive} 
      >
   
        {makeups}
      </Carousel>

      <div className='col-sm-12 col-md-12 col-lg-12'
        style={{ backgroundColor: '#f2e2a3', color: '#454545',marginTop:'30px', height:'35px', paddingTop:'6px', paddingLeft:'36px' }}>
  Үнэт эдлэл </div>
      <Carousel keyBoardControl={true} responsive={responsive} 
      >
   
        {ringsPr}
      </Carousel>
      <div className='col-sm-12 col-md-12 col-lg-12'
        style={{ backgroundColor: '#f2e2a3', color: '#454545',marginTop:'30px', height:'35px', paddingTop:'6px', paddingLeft:'36px' }}>
  Ээмэг зүүлт </div>
      <Carousel keyBoardControl={true} responsive={responsive} 
      >
   
        {earringsPr}
      </Carousel>


    </div>
  );
}