import React from 'react';
// children
const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid purple', height: '65vh'}}>
            {props.children}
        </div>
    );
};

export default Scroll;

