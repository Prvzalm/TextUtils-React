import React from 'react'
import { useState } from 'react'

const TextForm = (props) => {

    const [text, setText] = useState("")

    let wordCount = text.split(" ").length

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleUpClick = () => {
        setText(text.toUpperCase())
    }

    const handleLoClick = () => {
        setText(text.toLowerCase())
    }

    const handleClear = () => {
        setText('')
    }

    const copyText = () => {
        const text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
    }

    const removeSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    return (
        <><div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} onChange={handleChange} id="myBox" rows="5"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={removeSpaces}>Remove Extra Spaces</button>
        </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{wordCount === 1 ? wordCount = 0 : wordCount - 1} words and {text.length} characters</p>
                <p>{0.008 * wordCount} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something in the box above"}</p>
            </div>
        </>
    )
}

export default TextForm