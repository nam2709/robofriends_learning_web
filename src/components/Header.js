import React, { Component } from 'react';

class Header extends Component{
    shouldComponentUpdate(nextProps, nextState){
        return false
    }
    render() {
        console.log('header')
        return <h1 className='f1' style={{ fontFamily: 'SEGA LOGO FONT', color: 'purple', fontSize: '3.6rem'}}> Women's_Day </h1>
    }
}

export default Header;