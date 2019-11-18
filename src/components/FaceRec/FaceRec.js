import React from 'react';

const FaceRec = ({imageURL, box}) => {
    return (
        <div className='faceRecDiv'>
            <img id='faceRecImg' src={imageURL} alt='' />
            <div className='boundingBox' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
    )
}

export default FaceRec;