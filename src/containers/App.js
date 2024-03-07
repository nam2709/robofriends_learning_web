import React, { useState, useEffect } from 'react';
import Cardlist from '../components/Cardlist';
import SeacrhBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
import PostPic from '../components/PostPic';
import VideoPlayer from '../components/VideoBG';

function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    // const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('https://shaded-adorable-doll.glitch.me/images')
            .then(response => response.json())
            .then(users => setRobots(users));
    },[])


    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }


    const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    if (!robots.length){
        return (
            <div className='tc'>
                <VideoPlayer />
                <Header />
                <SeacrhBox/> 
                <h1>Loading failed - No Wifi Connection</h1>
            </div>
        )
    } else {
        return (
            <div className='tc'>
                <VideoPlayer />
                <Header />
                {/* <button onClick={() => setCount(count+1) }> Click me </button> */}
                <SeacrhBox searchChange={onSearchChange}/> 
                {/* but this an objects so must include this. before */}
                <Scroll>
                    <ErrorBoundry>
                        <Cardlist robots={filterRobots}/>
                    </ErrorBoundry>
                </Scroll>
                <PostPic />
            </div> 
        );
    }  
    
}

export default App