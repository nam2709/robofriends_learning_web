import React, { useState, useEffect } from 'react';
import Cardlist from '../components/Cardlist';
import SeacrhBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';

function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
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
        return <h1>Loading</h1>
    } else {
        return (
            <div className='tc'>
                <Header />
                <button onClick={() => setCount(count+1) }> Click me </button>
                <SeacrhBox searchChange={onSearchChange}/> 
                {/* but this an objects so must include this. before */}
                <Scroll>
                    <ErrorBoundry>
                        <Cardlist robots={filterRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div> 
        );
    }  
    
}

export default App