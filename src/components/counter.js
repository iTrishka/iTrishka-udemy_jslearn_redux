import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, reset}) => {
    return(
        <div className="container">
            <div className="counter-field"> <h1>{counter}</h1> </div>
            <div className="btn-field">
                <button onClick={inc} className="btn btn-ink"><img src="ink.png" alt="ink"></img></button>
                <button onClick={dec} className="btn btn-dec"> <img src="dec.png" alt="dec"></img></button>
                <button onClick={reset} className="btn btn-reset">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 50 50"  ><g><path  d="M44.5,7.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.5,0-0.8,0.2-1.2,0.5l-3.4,3.4c-1.9-1.8-4-3.1-6.4-4.1C30,5.5,27.5,5,25,5c-4.8,0-8.9,1.4-12.5,4.3c-3.6,2.9-5.9,6.7-7,11.3v0.2c0,0.2,0.1,0.4,0.2,0.6c0.2,0.2,0.4,0.2,0.6,0.2h5.2c0.4,0,0.6-0.2,0.8-0.6c0.7-1.7,1.2-2.8,1.4-3c1.2-2,2.8-3.5,4.8-4.7c2-1.1,4.2-1.7,6.5-1.7c3.5,0,6.5,1.2,9.1,3.6l-3.6,3.6C30.2,19.2,30,19.5,30,20c0,0.5,0.2,0.8,0.5,1.2c0.3,0.3,0.7,0.5,1.2,0.5h11.7c0.5,0,0.8-0.2,1.2-0.5c0.3-0.3,0.5-0.7,0.5-1.2V8.3C45,7.9,44.8,7.5,44.5,7.2z"/><path d="M43.5,28.3h-5c-0.4,0-0.6,0.2-0.8,0.6c-0.7,1.7-1.2,2.8-1.4,3c-1.2,2-2.8,3.5-4.8,4.7c-2,1.1-4.2,1.7-6.5,1.7c-1.7,0-3.3-0.3-4.9-0.9c-1.6-0.6-3-1.5-4.2-2.7l3.6-3.6c0.3-0.3,0.5-0.7,0.5-1.2c0-0.5-0.2-0.8-0.5-1.2c-0.3-0.3-0.7-0.5-1.2-0.5H6.7c-0.5,0-0.8,0.2-1.2,0.5C5.2,29.2,5,29.5,5,30v11.7c0,0.5,0.2,0.8,0.5,1.2c0.3,0.3,0.7,0.5,1.2,0.5c0.5,0,0.8-0.2,1.2-0.5l3.4-3.4c1.9,1.8,4,3.1,6.3,4.1c2.4,1,4.8,1.4,7.4,1.4c4.8,0,8.9-1.4,12.4-4.3c3.5-2.9,5.9-6.7,7-11.3c0,0,0-0.1,0-0.2c0-0.2-0.1-0.4-0.2-0.6C43.9,28.4,43.7,28.3,43.5,28.3z"/></g></svg>
                </button>
            </div> 
        </div> 
    )
}

const mapStateToProps= (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter);