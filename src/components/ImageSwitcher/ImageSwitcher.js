import React from 'react';

import './ImageSwitcher.css';

class ImageSwitcher extends React.Component {
   constructor(props) {
       super(props);

        this.state = {
            currentImage: 0,
       };
    }
   
    render () {
        return (
            <div className='slider'>
                <div className='slider__uppersection'>
                    <div className='uppersection__side'>
                        <button 
                            className={ 'uppersection__side__arrow arrow--left ' + (this.state.currentImage === 0 && 'arrow--disabled') }
                            onClick={() => {
                                this.setState({
                                    currentImage: this.state.currentImage - 1
                                });
                            }}
                            disabled={this.state.currentImage === 0}
                        >
                        </button>
                    </div>
                    <div className='uppersection__content'>
                       {this.props.children[this.state.currentImage]}
                    </div>

                    <div className='uppersection__side'>
                        <button 
                            className={ 'uppersection__side__arrow arrow--right ' + (this.state.currentImage === (this.props.children.length - 1) && 'arrow--disabled') }
                            onClick={() => {
                                this.setState({
                                    currentImage: this.state.currentImage + 1
                                });
                            }}
                            disabled={this.state.currentImage === (this.props.children.length - 1)}
                        >
                        </button>
                    </div>
                </div>

                <div className='pagination'>
                    {this.props.children.map((_, index) => {
                        return (
                            <span 
                            className={ 'pagination__dot ' + (this.state.currentImage === index ? 'pagination__dot--active' : '')}
                            onClick={() => {
                                this.setState({
                                    currentImage: index
                                })
                            }

                            }
                            >
                            </span>
                          )
                            }
                        )
                    }
                </div>
                
            </div>
        )
    }
}

export default ImageSwitcher;