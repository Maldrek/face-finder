import React from 'react';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3 description'>
                {'This magic will detect any faces in the images you provide'}
            </p>
            <div className='pa4 br3 inputDiv'>
                <input className='mainInput f4 pa2 w-70 center' type='text' placeholder='image link goes here' onChange={onInputChange}/>
                <button className='mainBtn f4 link ph3 pv2 white pointer' onClick={onButtonSubmit}>Find Faces</button>
            </div>
        </div>
    )
}

export default ImageLinkForm;