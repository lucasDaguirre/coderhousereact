import './ItemDetailImg.scss'
import React from 'react'
import ImgLg from './ImgLg/ImgLg';
import ImgVSlide from './ImgVSlide/ImgVSlide';


const ItemDetailImg = ({item}) => {
  return (
    <div className='itemDetailImgContainer'>
      <ImgLg image={item.image}/>
    </div>
  )
}

export default ItemDetailImg