import React, { useState } from 'react';

const NewBox = (props) => {
    const { boxes, setBoxes } = props;
    const [ color, setColor] = useState("");
    const [ size, setSize] = useState(100);

    const submitHandler = (event) => {
        event.preventDefault();

    setBoxes( [ ...boxes, { color: color, size: size + "px",}] );
    }
    return (
        <div>
        <form onSubmit={ submitHandler } style={{ margin: "20px" }}>
            <div>
            <label>Color:</label>
            <input type="text" name="color" value={color} onChange={ (event) => setColor(event.target.value) }/>
        </div>
        <div>
            <label>Size: </label>
            <input type="text" name="size"value={size}onChange={ (event) => setSize(event.target.value) }/>
        </div>
        <button>Add Box</button>
        </form>
    </div>
    )
}

export default NewBox;