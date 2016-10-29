//load redux dependancies 
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore,combineReducers } from 'redux'

//load reducers
import slider from './reducers'
import sliderState from './reducers/slider'

//load containers
import Slider from './containers/Slider'

//combine reducers 
const sliderReducer = combineReducers( {slider, sliderState} );

//create store 
const store = createStore(sliderReducer);

//render view
const render = () => {
    ReactDOM.render(
		<Slider
            slides={store.getState().slider} 
            onPrev={
                () => store.dispatch({
                    type : 'PREV_SLIDE'
                }) 
            }
            onNext={
                () => store.dispatch({
                    type : 'NEXT_SLIDE'
                }) 
            }
            currentSlide = {store.getState().sliderState}
            dispatch = {store.dispatch} 
		/>,
        document.getElementById('app')
    )
}

//subscribe DOM
store.subscribe(render);
render();