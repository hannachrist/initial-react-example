import React from 'react';

import './ModuleTabs.css';

class ModuleTabs extends React.Component {
    constructor (props) {
        super(props);

        this.state={
            currentTab: 0,
        }
    }
    
    render () {
        const { tabs = [] } = this.props;

        return (
            <div className='module-tabs'>
                <div className='tab-navigation'>
                    {this.props.children.map((_, index) => {
                        return (
                            <button 
                                className={'tab-navigation__button ' + (this.state.currentTab === index ? 'tab-navigation__button--selected' : '') }
                                onClick={() => {
                                    this.setState({
                                        currentTab: index
                                    })
                                }
                                }
                            >
                                {
                                    tabs.length > 0 ?
                                    tabs[index] :
                                    'Tab ' + (index + 1)
                                }
                            </button>
                        )
                    })}
                        
                </div>
                <div className='module-tabs__content'>
                    {this.props.children[this.state.currentTab]}
                </div>
            </div>
        )
    }
}

export default ModuleTabs;