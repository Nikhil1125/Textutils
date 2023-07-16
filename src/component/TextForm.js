import React, { useState } from 'react'

export default function TextForm(props) {
    const[text,setText]=useState("");
    const handleUpClick=()=>
    {
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","Success");
    }
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "Success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Cleared", "Success");
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "Success");
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Removed", "Success");

    }
    const handleOnChange=(event)=>
    {
        setText(event.target.value);                                                              
    }
  return (
    <>
          <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 >{props.heading}</h1>
          <div className="mb-3">
              {/* <label for="myBox" class="form-label">Text Area</label> */}
                  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
          </div>
          <button type="button" className="btn btn-primary mx-2 my-2"onClick={handleUpClick}>Convert To Uppercase</button>
              <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>Convert To LowerCase</button>
              <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
              <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy To Clipboard</button>
              <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Space</button>

    </div>
          <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length-1} and {text.length} characters</p>
        <p>{0.008*text.length} Minutes</p>
        <h2>Preview Text </h2>
        <p className='container'>{text.length>0?text:"Enter the text to preview"}</p>
    </div>
        
      </>
  )
}
