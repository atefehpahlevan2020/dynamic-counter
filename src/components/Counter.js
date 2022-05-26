import React from 'react';
import './Counter.css';


class Counter extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            counter : props.counter,
            is_finished : props.is_finished,
        }
        this.counterIntervalHandler = setInterval(this.updateCounter,1000)
    }

    updateCounter = () => {
        if(this.state.counter === 0) {
            clearInterval(this.counterIntervalHandler);
            this.setState({
                is_finished : true,
            })
            return;
        }
        this.setState({
            counter : this.state.counter - 1
        })
    }

    render(){
        return(
            <div className='Counter'>  
               {!this.state.is_finished && (
                    <React.Fragment>
                        <div className='Counter-num'>{this.state.counter}</div>
                        {this.props.displayBtns === true && <div className='Counter-btns-container'>
                        <div className='Counter-btn'>+</div>
                        <div className='Counter-btn'>-</div>
                        </div>}
                    </React.Fragment>
               )}
               {this.state.is_finished && <div style={{textAlign:'center',color:'green',fontSize:'2rem',fontWeight:'bold'}}>Finished</div>}
            </div>
        )
    }
}

export default Counter;