import type { Component } from 'solid-js';

const Orbit : Component<{orbit_position : number}> = (props) => {
    
    const orbit_width : string = props.orbit_position * 100 + 'px';
    const orbit_gap : string = 50 + 'px';
    

    return (
        <>
            <div id="a" style={{width: orbit_width, padding: orbit_gap}}></div>
        </>
    ); 
}

export default Orbit;
