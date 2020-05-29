import React from 'react';

import './ImageSwitcher.css';

class ImageSwitcher extends React.Component {
   constructor(props) {
       super(props);

        this.state = {
            coffeeData: [
                {
                    imageUrl: 'https://p2.piqsels.com/preview/180/610/522/coffee-cafe-hot-mug.jpg'
                },
                {
                    imageUrl: 'https://c1.wallpaperflare.com/preview/14/289/174/coffee-bean-coffee-cup-turkish-coffee.jpg'
                },
                {
                    imageUrl: 'https://c2.peakpx.com/wallpaper/1014/819/663/5k-espresso-machine-filter-coffee-filters-wallpaper-preview.jpg'
                },
            ],    
            currentIndex: 0,
       };
   }

   switchToNxtImg() {
        let newCurrentIndex = this.state.currentIndex;
        newCurrentIndex = newCurrentIndex + 1;

        this.setState({
            currentIndex: newCurrentIndex,
        });
   }
   
    render () {
        return (
            <div className='slider'>
                <div className='slider__uppersection'>
                    <div className='uppersection__side'>
                        <a href='#' className='uppersection__side__arrow arrow--left'></a>
                    </div>
                    <div className='uppersection__content'>
                       {this.props.children}
                    </div>

                    <div className='uppersection__side'>
                        <div 
                            className='uppersection__side__arrow arrow--right'
                            // onClick={ this.switchToNxtImg() }
                        >
                        </div>
                    </div>
                </div>

                <div className='pagination'>
                    <span className='pagination__dot pagination__dot--inactive'></span>
                    <span className='pagination__dot pagination__dot--inactive'></span>
                    <span className='pagination__dot pagination__dot--inactive'></span>
                </div>
                
            </div>
        )
    }
}

export default ImageSwitcher;