import React from 'react'

//load components and containers
import SlideItem from '../components/SlideItem'
import SlideNav from '../components/SlideNav'

//slider component
const Slider = ({slides,onPrev,onNext,currentSlide,dispatch}) => (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        { slides.items.map((slide, i) => 
                            <SlideNav 
                                key = {i} 
                                indx = {i} 
                                onSlideSelection={() => {
                                    dispatch({
                                        type:'CURRENT_SLIDE',
                                        indx:i
                                    })
                                }}
                                activeItem={ ((currentSlide.currentSlide) === i) ? 'active' : '' }
                        />)}
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        {slides.items.map((slide, i) => 
                            <SlideItem key = {i} slide = {slide} activeItem={((currentSlide.currentSlide) === i) ? 'active' : ''} />)}
                    </div>
                    <a className="carousel-control left" href="#myCarousel" data-slide="prev" role="button" onClick={onPrev}>&lt;</a>
                    <a className="carousel-control right" href="#myCarousel" data-slide="next" role="button" onClick={onNext}>&gt;</a>
                </div>
            </div>
        </div>
    </div>
)

export default Slider;