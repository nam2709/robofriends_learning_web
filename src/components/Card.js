import React from 'react';

const Card = ({ id, name }) => {
    return (
        <div className='tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5'>
            {/* <img alt='robots' src={`https://robohash.org/${id}?size=200x200`}/> */}
            <img 
                alt='robots' 
                src={`https://shaded-adorable-doll.glitch.me/image/${id}`}
                style={{ width: "300px", height: "380px" }}
            />
            <div>
                <h2> {name} </h2>
                {/* <p> {email} </p> */}
            </div>
        </div>
    );
}

export default Card;