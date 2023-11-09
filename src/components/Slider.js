import React, { Component } from 'react'
import SwiftSlider from 'react-swift-slider'

export class Slider extends Component {
    render() {
       const data =[
            {'id':'1','src':'slider_1.jpg'},
            {'id':'2','src':'slider_2.jpg'},
            {'id':'2','src':'slider_3.jpg'},
            {'id':'3','src':'banner.jpg'},
            {'id':'4','src':'appoint.jpg'}
          ];
        return (
            <div className='slider'>
              <div id='slider_txt1'><h1>
                Your Health is our First Priority
              </h1>
              <h2>A community in which all people achieve their full potential for
              health<br/> and well-being across the lifespan</h2></div>  
          
 
           <SwiftSlider data={data} interval={1500} height={455}/>
            </div>
        )
    }
}
export default Slider
