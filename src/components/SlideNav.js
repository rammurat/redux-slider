import React from 'react'

//slider navigation component
const SlideNav = ({indx,activeItem,onSlideSelection}) => (
    <li data-target="#myCarousel" data-slide-to={indx} className={activeItem} onClick={onSlideSelection}></li>
)

export default SlideNav;