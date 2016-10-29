//reducer  
const slider = (state = {}, action) =>{  
    switch(action.type){
        case 'PREV_SLIDE':
            return {
                prevSlide : state.currentSlide,
                totalSlides : 5,
                currentSlide : (state.currentSlide === 0) ? (state.totalSlides -1) : (--state.currentSlide)
            };
        case 'NEXT_SLIDE':
            return {
                prevSlide : state.currentSlide,
                totalSlides : 5,
                currentSlide : (state.currentSlide < (state.totalSlides - 1)) ? (++state.currentSlide) : 0
            };
        case 'CURRENT_SLIDE':
            return {
                prevSlide : state.currentSlide,
                totalSlides : 5,
                currentSlide : (action.indx)
            };
        default:
            return {
                prevSlide : 0,
                totalSlides : 5,
                currentSlide : 0
            }
    }
};

export default slider;