import React from 'react';
import Tilt from 'react-tilt';

const Logo = () => {
    return (
        <div className='logo ma4 mt0'>
            <Tilt className="Tilt logoTilt" options={{ max : 35 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner"> <p>FaceRec</p> </div>
            </Tilt>
        </div>
    )
}

export default Logo;