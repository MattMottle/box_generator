import React from 'react';

const DisplayBoxes = (props) => {

    const { boxes } = props;
    return (
    <div>
        {
        boxes.map((box, index) => (
            <div key={index} style={{ 
                display: "inline-block",
                margin: "10px",
                height: box.size, 
                width: box.size, 
                backgroundColor: box.color
                }}>
            </div>
        ))
        }
    </div>
    );
}

export default DisplayBoxes;