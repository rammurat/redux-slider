import React from 'react'

//slider item component
const SlideItem = ({slide,activeItem}) => (
    <div className={"item " + activeItem}>
        <img src={slide.img} alt={slide.caption} />
        <div className="carousel-caption">
            <h3>{slide.caption}</h3>
        </div>
    </div>
)

export default SlideItem;